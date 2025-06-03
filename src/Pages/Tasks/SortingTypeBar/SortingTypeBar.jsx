import React, { useEffect } from 'react'
import { tasksContext } from '../Tasks'
import { useContext } from 'react'
import s from './SortingTypeBar.module.css'

const SortingTypeBar = () => {
  const { sortingTypeBar, setSortingTypeBar,
    sortingTypes, setSortingTypes,
    unselectAll, setType,
    type, setTasksOnType,
    tasks } = useContext(tasksContext)



  useEffect(() => {
    setSortingTypes(prev => prev.map(ea =>
      type == ea.type ?
        { ...ea, ind: true } :
        { ...ea, ind: false }
    ))

    console.log(type)

    let taskArray = []

    if (type == "Pending" || type == "Finished") {
      for (let i in tasks) {
        if (tasks[i].type.toLowerCase() == type.toLowerCase()) {
          taskArray.push(tasks[i])
        }
      }
      setTasksOnType([...taskArray])
    } else {
      setTasksOnType([...tasks])
    }    
  }, [type, tasks])


  return (
    <>
      <div className={sortingTypeBar ? s.sortTypeBar : s.hideSortTypeBar} onClick={() => { setSortingTypeBar(false) }}>
        <ul className={s.sortTypeBarBox}>
          {sortingTypes?.map((type, i) => {
            return (
              <li
                className={type.ind ? s.indicated : s.notIndicated}
                key={type.type}
                onClick={() => {
                  unselectAll()
                  setType(type.type)
                  setSortingTypes(prev => prev.map(ea =>
                    prev[i].type == ea.type ?
                      { ...ea, ind: true } :
                      { ...ea, ind: false }
                  ))
                }} >
                {type.type}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default SortingTypeBar
