import { useRef } from "react"
import s from "./uploaderPrompt.module.css"
import Button from "../../../../Components/Button"


const UploaderPrompt = ({ uploadFile, uploaderPrompt, setUploaderPrompt }) => {
    const inputRef = useRef()

    if(uploaderPrompt)return <div className={s.uploaderWrapper}>
        <input type="file" id="fileUploader" accept="*" ref={inputRef} onChange={e => { uploadFile(e.target.files) }} />

        <div className={s.uploaderBox}>
            <Button 
                icon={(<i className={`fa fa-close`}></i>)}
                className={s.closeButton}
                func={()=>{setUploaderPrompt(false)}}/>
            <label className={s.uploaderBoxLabel} htmlFor="fileUploader" onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { e.preventDefault(), uploadFile(e.dataTransfer.files)}}>
                <img src="./Folder/cloudUpload.png" alt="" />
                <p>Click to Upload</p>
                <p>or Drop Files to Upload</p>
            </label>
        </div>

    </div>
}

export default UploaderPrompt