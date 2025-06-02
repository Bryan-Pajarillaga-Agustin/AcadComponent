import { createContext, lazy, useEffect, useState } from 'react'
import './App.css'

// NavBar
import NavBar from "./NavBar/NavBar"


// Other Components
import Loading from './Components/Loading/Loading'
import SaveChanges from './Components/SaveChanges/SaveChanges'
// PageNotFound
import PageNotFound from './PageNotFound/PageNotFound'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/Firebase'


// Page Components
const Home = lazy(()=> import("./Pages/Home/Home"))
const Tasks = lazy(()=> import("./Pages/Tasks/Tasks"))
const Folders = lazy(()=> import("./Pages/Folders/Folders"))
const Contacts = lazy(()=> import("./Pages/Contacts/Contacts"))
const Dashboard = lazy(()=> import('./Pages/Dashboard/Dashboard'))
const SignIn = lazy(()=> import("./Authentication/SignIn/SignIn"))
const SignUp = lazy(()=> import("./Authentication/SignUp/SignUp"))

const router = [
  {path: "/AcadComponent/", element: <Home/>},
  {path: "/AcadComponent/Tasks", element: <Tasks/>},
  {path: "/AcadComponent/Folders", element: <Folders/>},
  {path: "/AcadComponent/Contacts", element: <Contacts/>},
  {path: "/AcadComponent/Dashboard", element: <Dashboard/>},
  {path: "/AcadComponent/SignIn", element: <SignIn/>},
  {path: "/AcadComponent/SignUp", element: <SignUp/>},
  {path: "*", element: <PageNotFound/>}
]

export const context = createContext()

function App() {
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showMakeUserSignIn, setShowMakeUserSignIn] = useState(false)
  const [hideSideBar, setHideSideBar] = useState(false)
  const [hideSaveChanges, setHideSaveChanges] = useState(false)
  const [loading, setLoading] = useState(false)

  const [prevPage, setPrevPage] = useState("")

  const [user, setUser] = useState()
  const [userData, setUserData] = useState([])
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

  if(!user?.uid)
    onAuthStateChanged(auth, (current)=>{
    if(current?.uid != null){
      setUser(current)
    } 
  })

  const contextVariables = {
    // Booleans
    showSignUp, setShowSignUp,
    showLogin, setShowLogin,
    showMakeUserSignIn, setShowMakeUserSignIn,
    hideSideBar, setHideSideBar,
    hideSaveChanges, setHideSaveChanges,
    loading, setLoading,

    // Strings and Integers 
    prevPage, setPrevPage,

    // Arrays & Objects
    user, setUser,
    userData, setUserData,
    pages, setPages,

    // Functions
    pagination: (i)=>{
      handlePages(i)
      console.log(i)
    }
  }

  function handlePages(index) {
    console.log(index)
    setPages((prev, i) => prev.map((page, i)=>
      index == i ?
      {...page, ind: true} :
      {...page, ind: false}
    ))
  }

  useEffect(()=>{
    console.log(prevPage)
  },[prevPage])

  return (
    <>
      <context.Provider value={contextVariables}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {
              router?.map(page => 
                <Route path={page.path} key={page.path} element={page.element} />
              )
            }
          </Routes>
          <Loading />
        </BrowserRouter>
      </context.Provider>
    </>
  )
}

export default App
