import React, { useRef } from 'react'
import { context } from '../../App'
import { useContext, useState, useEffect } from 'react'
// Tasks File Components
import BottomOptions from './BottomOptions/BottomOptions'
import EditTaskPrompt from './EditTaskPrompt/EditTaskPrompt'
import SortingTypeBar from './SortingTypeBar/SortingTypeBar'
import SortTaskPrompt from './SortTaskPrompt/SortTaskPrompt'
import TasksContainer from './TasksContainer/TasksContainer'
import TopOptions from './TopOptions/TopOptions'
import WriteTaskPrompt from './WriteTaskPrompt/WriteTaskPrompt'
import SaveChanges from './ChangesPrompt/Changes'

// Style 
import s from "./Tasks.module.css"
import styles from "./TasksContainer/TasksContainer.module.css"

// Other Components
import Button from '../../Components/Button'
import { createContext } from 'react'

export const tasksContext = createContext()

import { db } from '../../Firebase/Firebase'
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const Tasks = () => {
  const loc = JSON.parse(localStorage.getItem("Changes"))
  const navigation = useNavigate()

  // Context
  const { user, setShowMakeUserSignIn, 
    setPages, setLoading, 
    changes, setChanges, 
    setTasksCache, tasksCache,
    prevPage, pagination } = useContext(context)

  // Refs
  const searchValue = useRef()

  // States
  // Booleans
  const [writeTaskPrompt, setWriteTaskPrompt] = useState(false)
  const [editTaskPrompt, setEditTaskPrompt] = useState(false)
  const [sortTaskPrompt, setSortTaskPrompt] = useState(false)
  const [sortingTypeBar, setSortingTypeBar] = useState(false)
  const [searching, setSearching] = useState(false)
  const [sorting, setSorting] = useState(false)
  const [selecting, setSelecting] = useState(false)
  const [editing, setEditing] = useState(false)

  const [type, setType] = useState("Pending")

  // Numbers 

  const [numberOfChanges, setNumberOfChanges] = useState(loc ? loc.length - 1 : null)

  // Arrays and Objects
  const [tasks, setTasks] = useState([])
  const [tasksOnType, setTasksOnType] = useState(tasks.length != 0 ? [...tasks] : [])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [selectedTasks, setSelectedTasks] = useState([])
  const [openedTask, setOpenedTask] = useState({})
  const [sortingTypes, setSortingTypes] = useState([
    { type: "Pending", ind: true },
    { type: "Finished", ind: false },
    { type: "All Tasks", ind: false },
  ])
  const [sortOptions, setSortOptions] = useState([
    { description: "Newest to Oldest", state: false },
    { description: "Oldest to Newest", state: false },
    { description: "From A-Z", state: false },
    { description: "From Z-A", state: false },
  ])

  // *-------------------- FUNCTIONS  -----------------------* 

  const writeTask = async (data) => {
    let dataTask = [...tasks]; // Assuming 'tasks' is an array in your component state
    const userUID = user.uid?.toString(); // Get the user UID
    const docRef = doc(db, "Users", userUID); // Correctly create a document reference


    let letters = "qwertyuiopasdfghjklzxcvbnm";
    let randId = "";
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * (letters.length)); //Corrected random number generation
      randId = randId.concat(letters[random]);
    }
    let newTask = {
      id: randId,
      task: data,
      dateCreated: { fullDate: new Date(), time: Date.now() },
      selected: false,
      style: "default",
      cName: [
        JSON.stringify(styles.col),
        JSON.stringify(styles.br),
        JSON.stringify(styles.fs),
        JSON.stringify(styles.bgC),
        JSON.stringify(styles.fW),
      ],
      isChecked: false,
      type: "pending",
    };

    dataTask.unshift(newTask);
    try {
      await updateDoc(docRef, {
        tasks: arrayUnion(newTask), // Directly add the newTask
      });
      setWriteTaskPrompt(false);
      //  Update state with the new task.  Don't rely on docSnap.Tasks, which might be outdated.
      setTasks([...dataTask]);  //Update from local state after successful write

    } catch (error) {
      console.log("Error writing task:", error);
    }
  };

  const unselectAll = () => {
    let data = tasks
    let filtTasks = filteredTasks

    if (searching) {
      filtTasks = filtTasks.map(task => {
        return { ...task, isChecked: false }
      })

      handleSelectedTasks(null)
    } else {
      data = data.map(task => {
        return { ...task, isChecked: false };;
      });

      handleSelectedTasks(null)
    }

    setTasks(prevCheckboxes => {
      return prevCheckboxes.map(task => {
        return { ...task, isChecked: false };;
      });
    });
    if (searching) {
      setFilteredTasks([...filtTasks])
    }
  };

  // Reusable FUNCTIONS 

  function handleSelectedTasks(data) {
    setSelectedTasks(data == null ? [] : [...data])
  }

  function handleMarking(filtData, upData, prevData) {
    const locStor = JSON.parse(localStorage.getItem("Changes")) != null ?
      JSON.parse(localStorage.getItem("Changes")) : []
    if (locStor.length == 0) {
      locStor.push(tasks)
    }
    if (locStor.length >= 1) {
      locStor.push(upData)
    }
    localStorage.setItem("Changes", JSON.stringify(locStor))
    setChanges([...locStor])
    setNumberOfChanges(locStor.length - 1)

    let checkedUpData = []
    let unCheckedUpData = []
    for (let i in upData) {
      !upData[i].isChecked ?
        unCheckedUpData.push(upData[i]) :
        checkedUpData.push(upData[i])
    }

    if (selectedTasks.length >= 1) { //Updates the UI in the client-server
      if (searching)
        setFilteredTasks([...filtData]);

      setTasks([...checkedUpData, ...unCheckedUpData]);
      setTasksCache([...checkedUpData, ...unCheckedUpData])
    }

  }

  function handleSearch() {
    if (searchValue.current.value == "") {
      setSearching(false)
      setFilteredTasks(null)
    } else {
      setSearching(true)
      setFilteredTasks(tasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase())))
      console.log(tasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase())))
      setSorting(false)
    }
  }

  function handleIsSorting() {
    let data = sortOptions
    for (let i = 0; i < sortOptions.length; i++) {
      if (data[i].state == true) {
        setSorting(true)
        break
      } else if (i == sortOptions.length - 1 && sortOptions[i].state == false) {
        setSorting(false)
      }
    }
  }

  function backUpNavigation() {
    navigation(prevPage)
    switch (prevPage) {
      case "/AcadComponent/":
        pagination(0)
        break;
      case "/AcadComponent/Tasks":
        pagination(1)
        break;
      case "/AcadComponent/Folders":
        pagination(2)
        break;
      case "/AcadComponent/Contacts":
        pagination(3)
        break;
    }
  }

  async function saveToDataBase() {
    const userUID = user?.uid.toString();
    const docRef = doc(db, `Users/${userUID}`);
    setLoading(true)
    let changes = JSON.parse(localStorage.getItem("Changes"))
    changes = [...changes[numberOfChanges]]
    changes = changes.map((task) => {
      return { ...task, isChecked: false }
    })

    try {
      await updateDoc(docRef, { tasks: changes });  //Update from local state after successful write
      setNumberOfChanges(null)
      setTasks([...changes])
      unselectAll()
      localStorage.removeItem("Changes")
      setChanges(null)
    } catch (error) {
      alert("Failed to Save Changes. Please Try Again.")
    }

    setLoading(false)
  }

  // *-------------------- FUNCTIONS  -----------------------*


  // Effects

  useEffect(() => {
    if (changes != null) {
      console.log(changes[changes.length - 1])
      setTasks([...changes[changes.length - 1]])
    } else if (user?.uid && tasksCache?.length == 0) {
      setShowMakeUserSignIn(false)
      setPages(prev => prev.map((p) => {
        return p.name === "Tasks" ?
          { ...p, ind: true } :
          { ...p }
      }))

      const getFromFirestore = async () => {
        try {
          const docRef = doc(db, "Users", user?.uid)
          const data = await getDoc(docRef)

          let tasksData = data.data().tasks


          setTasks([...tasksData])
          setTasksCache([...tasksData])
        } catch (error) {
          console.log(error)
        }
      }

      getFromFirestore()
    } else if (tasksCache?.length > 1) {
      setTasks(tasksCache)
    } else {
      setShowMakeUserSignIn(true)
    }
  }, [user])


  useEffect(() => {
    if (searchValue.current.value == "") {
      setSearching(false)
      setFilteredTasks(null)
    } else {
      setSearching(true)
      setFilteredTasks(tasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase())))
      console.log(tasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase())))
      setSorting(false)
    }
  }, [tasks])

  useEffect(() => {
    setPages(prev => prev.map((p) =>
      p.name === "Tasks" ?
        { ...p, ind: true } :
        { ...p, ind: false }
    ))
  }, [])

  // ContextVariable

  const contextVariables = {

    // Booleans
    writeTaskPrompt, setWriteTaskPrompt,
    editTaskPrompt, setEditTaskPrompt,
    sortTaskPrompt, setSortTaskPrompt,
    sortingTypeBar, setSortingTypeBar,
    type, setType,
    searching, setSearching,
    sorting, setSorting,
    selecting, setSelecting,
    editing, setEditing,

    // Numbers
    numberOfChanges, setNumberOfChanges,

    // Arrays & Objects
    tasks, setTasks,
    filteredTasks, setFilteredTasks,
    tasksOnType, setTasksOnType,
    selectedTasks, setSelectedTasks,
    changes, setChanges,
    sortingTypes, setSortingTypes,
    type, setType,
    sortOptions, setSortOptions,
    openedTask, setOpenedTask,

    // Functions
    unselectAll, handleSelectedTasks,
    handleMarking, saveToDataBase,
    backUpNavigation: () => {backUpNavigation()},
    writeTask: (data) => writeTask(data)
  }


  return <>
    <tasksContext.Provider value={contextVariables}>
      <div className={s.tasksWrapper}>
        <div className={s.tasksEditor}>
          <h2 className={s.titleWrapper}>
            Tasks
            <i className={`fa fa-bars`} onClick={() => { sortingTypeBar ? setSortingTypeBar(false) : setSortingTypeBar(true) }}></i>
            <SortingTypeBar />
          </h2>

          <TopOptions />
          <div className={s.searchWrapper}>
            <div>
              <label htmlFor="searchBar">
                <i className={"fa fa-search"}></i>
              </label>
              <input
                id="search-bar"
                type="text"
                ref={searchValue}
                placeholder="Type Task..."
                onChange={() => { handleSearch(), handleIsSorting() }} />
              <Button content={"Search"} className={s.Search_button} />
            </div>
          </div>
          <BottomOptions />
          <TasksContainer />
          <WriteTaskPrompt setWriteTaskPrompt={setWriteTaskPrompt} />
          <EditTaskPrompt />
          <SaveChanges />
          <SortTaskPrompt />
        </div>
      </div>
    </tasksContext.Provider>
  </>
}

export default Tasks