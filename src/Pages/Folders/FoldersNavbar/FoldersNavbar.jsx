import { useContext, useState } from "react"
import s from "./FoldersNavbar.module.css"
import UploaderPrompt from "./UploaderPrompt/UploaderPrompt"

const FoldersNavbar = ({ setShowFolderInput }) => {
    const [uploaderPrompt, setUploaderPrompt] = useState(false)

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
            uploaderPrompt={uploaderPrompt}
            setUploaderPrompt={(val) => { setUploaderPrompt(val) }} />
    </div>
}

export default FoldersNavbar