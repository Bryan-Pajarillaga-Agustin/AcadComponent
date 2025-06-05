import { createContext, lazy, useEffect, useState } from 'react'
import './App.css'

// NavBar
import NavBar from './Navbar/Navbar'

// Page Components
import Home from "./Pages/Home/Home"
import Tasks from "./Pages/Tasks/Tasks"
import Folders from "./Pages/Folders/Folders"
import Contacts from "./Pages/Contacts/Contacts"
import Dashboard from './Pages/Dashboard/Dashboard'
import SignIn from "./Authentication/SignIn/SignIn"
import SignUp from "./Authentication/SignUp/SignUp"


// Other Components
import Loading from './Components/Loading/Loading'
// PageNotFound
import PageNotFound from './PageNotFound/PageNotFound'

import { HashRouter, Routes, Route, useNavigate } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './Firebase/Firebase'
import VerifySigningOut from './Authentication/VerifySigningOut/VerifySigningOut'
import { doc, getDoc } from 'firebase/firestore'
import MakeUserSignIn from './Authentication/MakeUserSignIn/MakeUserSignIn'


const router = [
  { path: "/AcadComponent/", element: <Home /> },
  { path: "/AcadComponent/Tasks", element: <Tasks /> },
  { path: "/AcadComponent/Folders", element: <Folders /> },
  { path: "/AcadComponent/Contacts", element: <Contacts /> },
  { path: "/AcadComponent/Dashboard", element: <Dashboard /> },
  { path: "/AcadComponent/SignIn", element: <SignIn /> },
  { path: "/AcadComponent/SignUp", element: <SignUp /> },
  { path: "*", element: <PageNotFound /> }
]

export const context = createContext()

function App() {

  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showMakeUserSignIn, setShowMakeUserSignIn] = useState(false)
  const [hideSideBar, setHideSideBar] = useState(true)
  const [hideSaveChanges, setHideSaveChanges] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [continueAs, setContinueAs] = useState(false)
  const [saveChanges, setSaveChanges] = useState(false)

  const [prevPage, setPrevPage] = useState("/AcadComponent/")
  const [imageContent, setImageContent] = useState(null)

  const [user, setUser] = useState()
  const [userData, setUserData] = useState({})
  const [tasksCache, setTasksCache] = useState([])
  const [foldersCache, setFoldersCache] = useState([])
  const [changes, setChanges] = useState(JSON.parse(localStorage.getItem("Changes")))
  const [pages, setPages] = useState([
    {
      name: "Home",
      ind: false,
      icon: (<span className='material-icons'>home</span>),
      page: <Home />,
      path: "/AcadComponent/"
    },
    {
      name: "Tasks",
      ind: false,
      icon: (<span className='fa fa-book'></span>),
      page: <Tasks />,
      path: "/AcadComponent/Tasks"
    },
    {
      name: "Folders",
      ind: false,
      icon: (<span className='material-icons'>folder</span>),
      page: <Folders />,
      path: "/AcadComponent/Folders"
    },
    {
      name: "Contacts",
      ind: false,
      icon: (<span className='material-icons'>phone</span>),
      page: <Contacts />,
      path: "/AcadComponent/Contacts"
    },
  ])

  if (!user?.uid)
    onAuthStateChanged(auth, (current) => {
      if (current?.uid != null) {
        setUser(current)

        getDataFromFireStore(current.uid)
      }
    })

  async function getDataFromFireStore(uid) {
    const docRef = doc(db, "Users", uid)
    try {
      const data = await getDoc(docRef)
      const getData = data.data()
      setUserData(getData)
    } catch (error) {
      console.log(error.code)
    }
  }

  const contextVariables = {

    // Booleans
    showSignUp, setShowSignUp,
    showLogin, setShowLogin,
    showMakeUserSignIn, setShowMakeUserSignIn,
    hideSideBar, setHideSideBar,
    hideSaveChanges, setHideSaveChanges,
    loading, setLoading,
    isSigningOut, setIsSigningOut,
    continueAs, setContinueAs,
    saveChanges, setSaveChanges,

    // Strings and Integers 
    prevPage, setPrevPage,
    imageContent, setImageContent,

    // Arrays & Objects
    user, setUser,
    userData, setUserData,
    tasksCache, setTasksCache,
    pages, setPages,
    changes, setChanges,
    foldersCache, setFoldersCache,
    // Functions
    pagination: (i) => {
      handlePages(i)
    },
    getDataFromFireStore: (user) => {
      getDataFromFireStore(user?.uid)
    }
  }

  function handlePages(index) {
    console.log(index)
    setPages((prev, i) => prev.map((page, i) =>
      index == i ?
        { ...page, ind: true } :
        { ...page, ind: false }
    ))
  }



  return (
    <>
      <context.Provider value={contextVariables}>
        <HashRouter>
          <NavBar />
          <Routes>
            {
              router?.map(page =>
                <Route path={page.path} key={page.path} element={page.element} />
              )
            }
          </Routes>
          <VerifySigningOut />
          <MakeUserSignIn />
          <Loading />
        </HashRouter>
      </context.Provider>
    </>
  )
}

export default App
