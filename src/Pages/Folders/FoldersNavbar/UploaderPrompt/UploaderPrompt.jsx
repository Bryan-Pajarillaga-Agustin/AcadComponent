import { useRef, useState, useContext, useEffect } from "react"
import s from "./uploaderPrompt.module.css"
import Button from "../../../../Components/Button"
import { context } from "../../../../App"
import { auth, cloudDB, db } from "../../../../Firebase/Firebase"
import Folders, { foldersContext } from "../../Folders"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { doc, updateDoc } from "firebase/firestore"


const UploaderPrompt = ({ uploaderPrompt, setUploaderPrompt }) => {
    const inputRef = useRef()

    const { user, setLoading, setFoldersCache } = useContext(context)
    const { folderPath, setFilesAndFolders, filesAndFolders } = useContext(foldersContext)

    const [progressBar, setProgressBar] = useState(false)
    const [uploadBox, setUploadBox] = useState(true)
    const [progress, setProgress] = useState([])

    const [files, setFiles] = useState([])

    const uploadFile = async (e) => {
        setLoading(true)
        const file = e
        setProgressBar(true)
        for (let i = 0; i < file.length; i++) {
            setProgress(prev => [...prev, { prog: 0, name: file[i].name }])
        }
        setFiles([...file])

        for (let j = 0; j < file.length; j++) {
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
                    var arr = filesAndFolders
                    const uploadTask = uploadBytesResumable(storageRef, file[j]);

                    uploadTask.on("state_changed", (s) => {
                        const prog = Math.floor((s.bytesTransferred / s.totalBytes) * 100)
                        setProgress(prev => prev.map((f, index) =>
                            f.name == file[j].name ?
                                { ...f, prog: prog } :
                                { ...f }
                        ))
                    }, (error) => {
                        console.log(error)
                    }, () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                            setFilesAndFolders(prev => [{ name: file[j].name, fileType: file[j].type, fullName: randId + "_" + file[j].name, url: url, dateCreated: Date.now(), isSelected: false, id: Math.random() * 1, type: "file", path: folderPath }, ...prev])
                            arr.push({ name: file[j].name, fileType: file[j].type, fullName: randId + "_" + file[j].name, url: url, dateCreated: Date.now(), isSelected: false, id: Math.random() * 1, type: "file", path: folderPath })
                            setFoldersCache([...arr])
                            updateDoc(docRef, {
                                folders: filesAndFolders
                            })
                        })
                    })

                }
            } catch {
                console.log("No file selected.");
                setLoading(false)
            }
        }

        setLoading(false)
    }

    if (uploaderPrompt)
        return <div className={s.uploaderWrapper}>
            <input type="file" id="fileUploader" accept="*" ref={inputRef} onChange={e => { uploadFile(e.target.files) }} multiple />

            <div className={progressBar ? s.progressBarWrapper : s.hidesProgressBarWrapper}>
                <Button
                    icon={progressBar ? (<i className="fa fa-arrow-up"></i>) : (<i className="fa fa-arrow-down"></i>)}
                    content={progressBar ? "Hide Progress Bar" : "Show Progress Bar"}
                    func={() => { progressBar ? setProgressBar(false) : setProgressBar(true) }}
                    className={s.showProgressButton}
                ></Button>

                <h3>Progress Bar</h3>

                <div className={s.progressBarBox}>
                    <h4>Files:</h4>
                    {
                        files?.map((file, i) => {
                            return (
                                <div className={s.uploadingFile} key={file?.lastModified}>
                                    {file.type.includes("image") ?
                                        <img src={URL.createObjectURL(file)} /> :
                                        <i className="fa fa-file"></i>}
                                    <div className={s.wrapNameAndBar}>
                                        <div className={s.bar}>
                                            <div className={s.barColor} style={{ width: `${progress[i]?.prog}%` }}></div>
                                        </div>
                                        <div className={s.wrapNameAndProgress}>
                                            <span className={s.name} >{progress[i]?.name}</span>
                                            <span className={s.progress}>{progress[i]?.prog}%</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={uploadBox ? s.uploaderBox : s.hideUploaderBox}>
                <Button
                    icon={(<i className={`fa fa-close`}></i>)}
                    className={s.closeButton}
                    func={() => { setUploaderPrompt(false) }} />
                <label className={s.uploaderBoxLabel} htmlFor="fileUploader" onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { e.preventDefault(), uploadFile(e.dataTransfer.files) }}>
                    <img src="./Folder/cloudUpload.png" alt="" />
                    <p>Click to Upload</p>
                    <p>or Drop Files to Upload</p>
                </label>
            </div>

        </div>
}

export default UploaderPrompt