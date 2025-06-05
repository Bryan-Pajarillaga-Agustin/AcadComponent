
import { context } from "../../App"
import { auth, cloudDB, db } from "../../Firebase/Firebase"
import s from "./Folders.module.css"
import FoldersBottomNavbar from "./FoldersBottomNavbar/FoldersBottomNavbar"
import FoldersNavbar from "./FoldersNavbar/FoldersNavbar"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { deleteObject, listAll, ref } from "firebase/storage"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import Button from "../../Components/Button"

export const foldersContext = createContext()

const Folders = () => {
    const { user, setLoading, foldersCache, setFoldersCache } = useContext(context)

    const { setPages, imageContent, setImageContent } = useContext(context)
    const folderInputRef = useRef(null)

    const [renameFolderInput, setRenameFolderInput] = useState(null)
    const [renamedFolder, setRenamedFolder] = useState(null)
    const [openFile, setOpenFile] = useState(false)

    const [selecting, setSelecting] = useState(false)
    const [showFolderInput, setShowFolderInput] = useState(false)
    1
    const [folderPath, setFolderPath] = useState("Folders/")

    const [filesAndFolders, setFilesAndFolders] = useState(foldersCache)



    const [openedFolder, setOpenedFolder] = useState([])
    const [currentOpenedPath, setCurrentOpenedPath] = useState([
        { name: "Folders", path: "Folders/" }
    ])
    const [selectedFoldersAndFiles, setSelectedFoldersAndFiles] = useState([])


    // Functions

    function handleChecking(folder) {
        let foldersData = filesAndFolders
        let sortSelectedFolders = []

        for (let ind in foldersData) {
            if (folder.id == foldersData[ind].id)
                foldersData[ind].isSelected = foldersData[ind].isSelected ? false : true
        }

        for (let i in filesAndFolders) {
            if (filesAndFolders[i].isSelected) {
                sortSelectedFolders.push(filesAndFolders[i])
            }
        }
        console.log()
        setSelectedFoldersAndFiles([...sortSelectedFolders])
        setFilesAndFolders([...foldersData])
    }

    function handleSelectingAll(bool) {
        setOpenedFolder(prev => prev.map((folder) => {
            return { ...folder, isSelected: bool ? true : false }
        }))

        let getFolders = filesAndFolders
        let sortSelectedFolders = []
        for (let i in getFolders) {
            getFolders[i].isSelected = bool ? true : false
            bool ? sortSelectedFolders.push(getFolders[i].id) : null
        }


        setSelectedFoldersAndFiles([...sortSelectedFolders])
    }

    function createFolder(element) {
        console.log(folderPath)
        const folderObject = {
            name: element.target.value,
            dateCreated: Date.now(),
            isSelected: false,
            id: Math.floor(Math.random() * 1000000),
            type: "folder",
            path: folderPath
        }
        const elemVal = element.target.value
        const elemKey = element.key

        if (elemKey == "Enter") {
            if (elemVal != "") {
                let data = [folderObject, ...filesAndFolders]
                saveToDatabase(data)
                setFilesAndFolders(prev => [folderObject, ...prev])
            } else {
                setShowFolderInput(false)
            }

            setShowFolderInput(false)
            element.target.value = ""
        }
    }
    function handleRenameFolder(element, folderArg) {
        const elemVal = element.target.value
        const elemKey = element.key
        let data = filesAndFolders

        console.log(folderArg.name)
        if (elemKey == "Enter") {
            if (elemVal != "") {
                data = data.map((folder) =>
                    folderArg.name == folder.name ?
                        { ...folder, name: elemVal } :
                        { ...folder }
                )
                saveToDatabase(data)
                setFilesAndFolders(prev => prev.map((folder) =>
                    folderArg.name == folder.name ?
                        { ...folder, name: elemVal } :
                        { ...folder }
                ))
            } else {
                setRenamedFolder(null)
            }

            setRenameFolderInput(null)
        }
    }

    function GoToFolderShortCut(folder) {
        let filesAndFolders = []
        let paths = currentOpenedPath
        console.log(paths.length)

        if (paths.length != 1) {
            for (let i in filesAndFolders) {
                if (filesAndFolders[i].path == folderPath) filesAndFolders.push(filesAndFolders[i])
            }

            for (let i in currentOpenedPath) {
                if (currentOpenedPath[i].path == folder.path) {
                    for (let j = currentOpenedPath.length - 1; j != i; j--) {
                        paths.splice(j, 1)
                    }
                    break
                }
            }


            setCurrentOpenedPath([...paths])
            setOpenedFolder([...filesAndFolders])
        }

    }

    function handleOpeningOfFolder(folder) {
        if (folder.type == "folder") {
            if (folder?.name) setFolderPath(folderPath + folder?.name + "/")
            setCurrentOpenedPath(prev => [...prev, { name: folder?.name, path: folder?.path + folder?.name + "/" }])
            let filesAndFolders = []
            for (let i in filesAndFolders) {
                if (filesAndFolders[i].path == folderPath) filesAndFolders.push(filesAndFolders[i])
            }
            setOpenedFolder([...filesAndFolders])
        } else {
            setOpenFile(true)
        }
    }

    const deleteSelectedFolder = async () => {
        let getFilesAndFolders = filesAndFolders
        setLoading(true)
        try {
            for (let i in selectedFoldersAndFiles) {
                for (let j in getFilesAndFolders) {
                    if (selectedFoldersAndFiles[i].id == getFilesAndFolders[j].id) {
                        if (selectedFoldersAndFiles[i].type == "folder") {
                            getFilesAndFolders.splice(j, 1)
                        } else {
                            await deleteObject(ref(cloudDB, `/${auth.currentUser?.uid}/${folderPath}/${selectedFoldersAndFiles[i].fullName}`))
                            getFilesAndFolders.splice(j, 1)
                        }
                    }
                }
            }

            await updateDoc(doc(db, "Users", user.uid), {
                folders: getFilesAndFolders
            })
        } catch (error) {
            console.log(error)
        }

        setSelectedFoldersAndFiles([])
        setFilesAndFolders([...getFilesAndFolders])
        setLoading(false)
    }

    const saveToDatabase = async (data) => {
        const docRef = doc(db, "Users", user?.uid)
        console.log(data)
        if (data) setFoldersCache([...data])
        try {
            await updateDoc(docRef, {
                folders: data ? data : filesAndFolders
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Effects

    useEffect(() => {
        if (folderPath != "") {
            let objects = []
            let files = []
            let folders = []

            for (let i in filesAndFolders) {
                if (filesAndFolders[i].path === folderPath) {
                    objects.push(filesAndFolders[i])
                }
            }

            for (let i in objects) {
                objects[i].type == "folders" ?
                    folders.push(objects[i]) :
                    files.push(objects[i])
            }


            console.log(objects)
            setOpenedFolder([...folders, ...files])
        }
    }, [folderPath, filesAndFolders])


    useEffect(() => {
        if (foldersCache.length == 0 && user) {
            const getFromFireStore = async (uid) => {
                setLoading(true)
                try {
                    const docRef = doc(db, "Users", uid)
                    const getFolders = await getDoc(docRef)
                    const dataFolders = getFolders.data()?.folders
                    console.log(dataFolders)
                    if (dataFolders) {
                        setFilesAndFolders([...dataFolders])
                        setFoldersCache([...dataFolders])
                    }

                } catch (error) {
                    console.log(error)
                }
                setLoading(false)
            }

            if (user?.uid) getFromFireStore(user.uid)
        }
    }, [foldersCache, user])


    useEffect(() => {
        setPages(prev => prev.map((p) =>
            p.name === "Folders" ?
                { ...p, ind: true } :
                { ...p, ind: false }
        ))
    }, [])

    // Component

    const variables = {
        openFile, setOpenFile,
        imageContent, setImageContent,
        folderPath, setFilesAndFolders,
        filesAndFolders, folderInputRef,
        saveToDatabase: () => { saveToDatabase() }
    }

    const FileOrImage = ({ folder }) => {
        return <>
            {
                folder.fileType.includes("image") ?
                    <input type="image" src={folder.url} width={"16px"} style={{ marginRight: "1rem" }} /> :
                    <i className="fa fa-file"></i>
            }
        </>
    }

    return (
        <foldersContext.Provider value={variables}>
            <div className={s.foldersWrapper}>
                <FoldersNavbar
                    createFolder={createFolder}
                    setShowFolderInput={setShowFolderInput} />
                {
                    selecting ?
                        <FoldersBottomNavbar
                            selecting={selecting}
                            setSelecting={setSelecting}
                            handleSelectingAll={handleSelectingAll}
                            deleteSelectedFolder={deleteSelectedFolder} /> :
                        <div className={s.foldersBottomNav}>
                            <button onClick={() => { setSelecting(true) }}>Select Folders</button>
                        </div>
                }
                <div className={s.foldersBox}>
                    <div className={s.folderPathWrapper}>
                        <h3>{
                            currentOpenedPath.map(folder =>
                                folder.path == "Folders/" ?
                                    <span key={folder.name + folder.path}>
                                        <span onClick={() => { setFolderPath(folder.path), GoToFolderShortCut(folder) }}>{folder.name} </span>
                                    </span> :
                                    <span key={folder.name + folder.path}>
                                        / <span onClick={() => { setFolderPath(folder.path), GoToFolderShortCut(folder) }}>{folder.name} </span>
                                    </span>
                            )
                        }</h3>
                    </div>
                    <div className={showFolderInput ? s.folderInput : s.hideFolderInput}>
                        <i className="fa fa-folder"></i>
                        <input
                            type="text"
                            ref={folderInputRef}
                            id="folderInput"
                            onBlur={() => {
                                setShowFolderInput(false)
                                folderInputRef.current.value = ""
                            }}
                            onKeyDown={(e) => {
                                createFolder(e)
                            }} />
                        <Button
                            className={`fa fa-close ${s.close}`}
                            content={"Cancel"}
                            func={() => { setShowFolderInput(false) }}></Button>
                    </div>
                    {openedFolder?.map((folder, i) =>
                        <label
                            htmlFor={renameFolderInput != null ? folder.id : null}
                            className={folder.type == "folder" ? folder.isSelected ? `${s.selected} ${s.folder}` : `${s.folder}` : folder.isSelected ? `${s.selected} ${s.file}` : `${s.file}`}
                            key={folder.dateCreated}
                            onDoubleClick={() => {
                                if (!selecting) {
                                    setRenameFolderInput(folder.name)
                                    setRenamedFolder(folder.id)
                                }
                            }} >

                            <input type="checkbox"
                                style={selecting ?
                                    { display: "block" } :
                                    { display: "none" }
                                }
                                checked={folder.isSelected ? true : false}
                                onChange={() => {
                                    if (selecting) handleChecking(folder)
                                }} />
                            {
                                folder.type == "folder" ?
                                    <i className="fa fa-folder"></i> :
                                    <FileOrImage folder={folder} />
                            }
                            {
                                renameFolderInput != null &&
                                    renamedFolder == folder.id ?
                                    <input
                                        id={folder.id}
                                        type="text"
                                        value={renameFolderInput}
                                        onKeyDown={(e) => {
                                            handleRenameFolder(e, folder)
                                        }}

                                        onBlur={() => [
                                            setRenameFolderInput(null),
                                            setRenamedFolder(null)
                                        ]}

                                        onChange={(e) => {
                                            setRenameFolderInput(e.target.value)
                                        }} /> :
                                    <span>{folder.name}</span>
                            }
                            {
                                folder.type == "folder" ?
                                    <button
                                        className={s.open}
                                        onClick={() => {
                                            handleOpeningOfFolder(folder)
                                        }}>
                                        Open
                                    </button> :
                                    <a
                                        className={s.open}
                                        href={folder.url}>
                                        Open
                                    </a>
                            }
                        </label>
                    )}
                </div>
            </div>
        </foldersContext.Provider>
    )
}

export default Folders