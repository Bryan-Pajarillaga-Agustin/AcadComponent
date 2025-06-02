import React from 'react'
import { useContext, useRef } from 'react'
import { tasksContext } from "../Tasks"
import s from "./EditTaskPrompt.module.css"
import Button from '../../../Components/Button'

const EditTaskPrompt = () => {
  const { openedTask, setOpenedTask, 
          tasks, filteredTasks, 
          setEditing, editing, 
          handleMarking } = useContext(tasksContext)
  const editingParagraph = useRef(null)

  function handleEdit() {
    let data = [...tasks]
    let filtTasks = filteredTasks
    for (let i in data) {
      if (data[i].id === openedTask.id) {
        data[i].task = editingParagraph.current.innerText
      }

    }

    for (let i in filtTasks) {
      if (filtTasks[i].id === openedTask.id) {
        filtTasks[i].task = editingParagraph.current.innerText
      }

    }

    handleMarking(filtTasks, [...data])
  }


  if (openedTask?.id != null) return (
    <div className={editing ? s.editTaskPrompt : s.hideEditTaskPrompt}>
      <div className={s.nav}>
        <h3><i className="fa fa-edit"></i> <span>Edit Task</span></h3>
        <Button icon={(<i className="fa fa-times"></i>)}
          func={() => { setOpenedTask({ index: null, isOpened: false }), setEditing(false)}}
        />
      </div>
      <div className={s.content}>

        <p ref={editingParagraph} contentEditable={editing}>{tasks.map((task, i) => { if (task.id === openedTask.id) { return task.task } })}</p>
        {/* {
                    searching ? :
                    <p ref={taskEditingP} onInput={(e)=>{handleEditing(e)}} contentEditable={true}>{openedTask.isOpened ? tasks[openedTask.index].task : null}</p>
                } */}

      </div>
      <Button content={"Save Changes"}
        className={s.submitButton}
        func={() => { handleEdit(), setEditing(false) }} />
    </div>
  )
}

export default EditTaskPrompt