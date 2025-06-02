import React, { useContext, useEffect } from 'react'
import s from "../TasksContainer.module.css"
import { tasksContainerContext } from '../TasksContainer'
import Task from '../Task/Task'
import { tasksContext } from '../../Tasks'

const MapTasks = () => {
    const { tasks, sortOptions,
            searching, filteredTasks } = useContext(tasksContext)
    
    const { sorting, type, 
            taskCheckboxes, selecting } = useContext(tasksContainerContext)
    
        

    if (searching && filteredTasks != null) {
        console.log("searching && filteredTask")
        return <div className={s.tasksContainer} key={"Task_Container"}>

            {filteredTasks.map((task, i) => {
                if (task.type === "pending" && type === "Pending") {
                    return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                } else if (task.type === "finished" && type === "Finished") {
                    return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                } else if (type === "All Tasks") {
                    return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                }
            })}
        </div>
    } else if (sorting && !searching) {
        let sortedTasks = tasks
        for (let i in sortOptions) {
            if (i == 0 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b) => { return b.dateCreated.time - a.dateCreated.time })
            } else if (i == 1 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b) => { return a.dateCreated.time - b.dateCreated.time })
            } else if (i == 2 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b) => { return a.task.localeCompare(b.task) })
            } else if (i == 3 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b) => { return b.task.localeCompare(a.task) })
            }
        }

        return (
            <div className={s.tasksContainer}>
                {sortedTasks.map((task, i) => {
                    if (task.type === "pending" && type === "Pending") {
                        return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                    } else if (task.type === "finished" && type === "Finished") {
                        return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                    } else if (type === "All Tasks") {
                        return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                    }
                })}
            </div>
        )
    } else if (!sorting && !searching) {
        console.log("!sorting && !searching")
        return (
            <div className={s.tasksContainer}>
                {taskCheckboxes?.map((task, i) => {
                    if (task.type === "pending" && type === "Pending") {
                        return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                    } else if (task.type === "finished" && type === "Finished") {
                        return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                    } else if (type === "All Tasks") {
                        return <Task task={task} i={i} key={task.id} selecting={selecting} chechTask={() => checkTask()} />
                    }
                })}
            </div>
        )
    }
}

export default MapTasks