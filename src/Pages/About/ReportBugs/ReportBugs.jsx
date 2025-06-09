import { useRef } from "react"
import Button from "../../../Components/Button"
import s from "./ReportBugs.module.css"

const ReportBugs = () => {
    const editorRef = useRef()

    function submitToAuthor() {

    }

    return (
        <div className={s.reportBugsWrapper}>
            <div className={s.top}>
                <h3>Report Bugs:</h3>
                <Button 
                    content={"Clear"}
                    func={()=>{editorRef.current.value = null}}/>
            </div>

            <div className={s.middle}>
                <textarea ref={editorRef} rows={4}></textarea>
            </div>

            <div className={s.bottom}>
                <Button 
                    content={"Submit"}
                    func={()=>{submitToAuthor}} />
            </div>
        </div>
    )
}

export default ReportBugs
