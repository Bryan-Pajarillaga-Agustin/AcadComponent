import React, { useContext, useEffect } from 'react'
import s from "./WriteTaskPrompt.module.css"
import Button from "../../../Components/Button"
import { useRef, useState } from "react"
import { tasksContext } from '../Tasks'

const WriteTaskPrompt = ({setWriteTaskPrompt}) => {
  const { writeTaskPrompt, 
          writeTask, setShowNavbar } = useContext(tasksContext)

  const displayPlaceHolder = useRef(null)
  const inputFieldRef = useRef(null)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditing() {
    setIsEditing(Math.random() * 1)
  }

  function submitTask() {
    writeTask(inputFieldRef.current.innerText)
  }

  function clearInputField() {
    inputFieldRef.current.innerHTML = "<br>"
    write()
  }

  function write() {
    if (inputFieldRef.current.innerText == "\n" || inputFieldRef.current.innerHTML == "<br>") {
      displayPlaceHolder.current.style.display = "block"
    } else {
      displayPlaceHolder.current.style.display = "none"
    }
  }


  return (
    <>
      <div className={writeTaskPrompt ? s.writeTaskPrompt : s.hideWriteTaskPrompt}>

        <div className={s.nav}>
          <h3><i className="fa fa-edit"></i> <span>Task Prompt</span></h3>
          <Button icon={(<i className="fa fa-times"></i>)}
            func={() => { setWriteTaskPrompt(false), clearInputField() }}
          />
        </div>
        <div className={s.content}>
          <span ref={displayPlaceHolder}>Type Any Task...</span>
          <p ref={inputFieldRef} contentEditable="true" onInput={() => { handleEditing(), write() }}></p>

        </div>
        <Button content={"Submit"}
          className={s.submitButton}
          func={() => { submitTask(), clearInputField(), setWriteTaskPrompt(false) }} />
      </div>
    </>
  )
}

export default WriteTaskPrompt