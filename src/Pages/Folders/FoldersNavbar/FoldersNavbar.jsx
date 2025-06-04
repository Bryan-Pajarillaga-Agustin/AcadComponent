import { useContext, useState } from "react"
import s from "./FoldersNavbar.module.css"
import { context } from "../../../App"
import { auth, cloudDB, db } from "../../../Firebase/Firebase"
import { foldersContext } from "../Folders"
import { getDownloadURL, uploadBytes, ref } from "firebase/storage"
import UploaderPrompt from "./UploaderPrompt/UploaderPrompt"
import { doc, updateDoc } from "firebase/firestore"

const FoldersNavbar = ({ setShowFolderInput }) => {
    const { user, setLoading, setFoldersCache } = useContext(context)
    const { folderPath, setFilesAndFolders, filesAndFolders } = useContext(foldersContext)
    const [uploaderPrompt, setUploaderPrompt] = useState(false)

    const uploadFile = async (e) => {
        setLoading(true)
        const file = e

        
        for(let j = 0; j < file.length; j++) {
            let letters = "qwertyuiopasdfghjklzxcvbnm";
            let randId = "";
            for (let i = 0; i < 15; i++) {
                let random = Math.floor(Math.random() * (letters.length)); //Corrected random number generation
                randId = randId.concat(letters[random]);
            }

            const storageRef = ref(cloudDB, `${auth.currentUser?.uid}/${folderPath}/${randId + "_" + file[j].name}`)
            const docRef = doc(db, "Users", auth.currentUser?.uid)

            try {
                if (file[j]) {
                    let arr = filesAndFolders
                    await uploadBytes(storageRef, file[j])
                    const url = await getDownloadURL(storageRef)
                    setFilesAndFolders(prev => [{ name: file[j].name, fileType: file[j].type, fullName: randId + "_" + file[j].name, url: url, dateCreated: Date.now(), isSelected: false, id: Math.random() * 1, type: "file", path: folderPath }, ...prev])
                    arr.push({ name: file[j].name, fileType: file[j].type, fullName: randId + "_" + file[j].name, url: url, dateCreated: Date.now(), isSelected: false, id: Math.random() * 1, type: "file", path: folderPath })
                    setFoldersCache([...arr])

                    await updateDoc(docRef, {
                        folders: arr
                    })
                }
            } catch {
                console.log("No file selected.");
                setLoading(false)
            }
        }

        setLoading(false)
    }

    return <div className={s.foldersNav}>
        <h1>Folders</h1>
        <div className={s.right}>
            <button>Create</button>
            <div className={s.uploadWrapper}>
                <button onClick={() => { setUploaderPrompt(true) }}>
                    <i className="fa fa-file"></i>
                    <span>Upload File</span>
                </button>
                <button onClick={() => { setShowFolderInput(true) }}>
                    <i className="	fa fa-folder"></i>
                    <label htmlFor="folderInput">Create Folder</label>
                </button>
            </div>
        </div>
        <span className={s.horizontalLine}></span>

        <UploaderPrompt
            uploadFile={(e) => { uploadFile(e) }}
            uploaderPrompt={uploaderPrompt}
            setUploaderPrompt={(val) => { setUploaderPrompt(val) }} />
    </div>
}

export default FoldersNavbar