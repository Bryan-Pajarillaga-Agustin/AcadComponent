import React, { useContext, useEffect, useState } from 'react'
import s from "../TasksContainer.module.css"
import { tasksContainerContext } from '../TasksContainer'
import Task from '../Task/Task'
import { tasksContext } from '../../Tasks'

const MapTasks = () => {
    const { sortOptions, tasksOnType, 
            searching, filteredTasks } = useContext(tasksContext)
    
    const { sorting, type, selecting } = useContext(tasksContainerContext)
    
    const [sortedTasks, setSortedTasks] = useState([]) 

    useEffect(()=>{
        let data = searching ? filteredTasks : tasksOnType
        for (let i in sortOptions) {
            if (i == 0 && sortOptions[i].state == true) {
                data = data.sort((a, b) => { return b.dateCreated.time - a.dateCreated.time })
            } else if (i == 1 && sortOptions[i].state == true) {
                data = data.sort((a, b) => { return a.dateCreated.time - b.dateCreated.time })
            } else if (i == 2 && sortOptions[i].state == true) {
                data = data.sort((a, b) => { return a.task.localeCompare(b.task) })
            } else if (i == 3 && sortOptions[i].state == true) {
                data = data.sort((a, b) => { return b.task.localeCompare(a.task) })
            }
        }
        setSortedTasks([...data])
    },[sortOptions, tasksOnType, filteredTasks])

    if (searching && sorting) {
        return <div className={s.tasksContainer} key={"Task_Container"}>
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
    } else if(searching && !sorting) {
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
        return (
            <div className={s.tasksContainer}>
                {tasksOnType?.map((task, i) => {
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