import React, { useContext } from 'react'
import { tasksContext } from '../Tasks'
import s from "./SortTaskPrompt.module.css"
import Button from '../../../Components/Button'


const SortTaskPrompt = () => {
  const { setSortTaskPrompt, sortTaskPrompt,
    sortingTypes, setSortingTypes,
    setSorting, sortOptions, setSortOptions, } = useContext(tasksContext)

  function handleOptions(i) {
    let data = sortOptions
    data = data.map((ea, ind) => 
      data[ind] === data[i] ?
      { ...ea, state: ea.state ? false : true } :
      { ...ea, state: false }
    )

    for (let i in data) {
      if (data[i].state == true) {
        setSorting(true)
        break
      }

      if (i == data.length - 1 && !data[i].state) {
        setSorting(false)
      }
    }

    console.log(data)
    setSortOptions([...data])
  }

  return (
    <div className={sortTaskPrompt ? s.sortTaskPrompt : s.hideSortTaskPrompt}>
      <div className={sortTaskPrompt ? s.sortBox : s.Hide_Sort_Box}>
        <h2>Sort Settings</h2>
        <Button icon={(<i className="fa fa-close"></i>)}
          className={s.Hide_Sort_Box_Button}
          func={() => { setSortTaskPrompt(false) }} />
        <div className={s.sortOptions}>
          {sortOptions?.map((option, i) => {
            return <Button
              key={option.description}
              icon={(<i className={`fa fa-check-square ${option.state == true ? s.checked : s.unchecked}`}></i>)}
              content={option.description}
              func={() => { handleOptions(i) }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SortTaskPrompt