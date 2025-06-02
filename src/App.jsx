import { createContext, lazy, useState } from 'react'
import './App.css'

// Navbar
import NavBar from "./Navbar/Navbar"
// Page Components




// Authentication Components
import SignIn from "./Authentication/SignIn/SignIn"
import SignUp from "./Authentication/SignUp/SignUp"
// Other Components
import Loading from './Components/Loading/Loading'
import SaveChanges from './Components/SaveChanges/SaveChanges'
// PageNotFound
import PageNotFound from './PageNotFound/PageNotFound'
import { BrowserRouter, Routes, Route} from "react-router-dom"

const Home = lazy(()=> import("./Pages/Home/Home"))
const Tasks = lazy(()=> import("./Pages/Tasks/Tasks"))
const Folders = lazy(()=> import("./Pages/Folders/Folders"))
const Contacts = lazy(()=> import("./Pages/Contacts/Contacts"))
const Dashboard = lazy(()=> import('./Pages/Dashboard/Dashboard'))

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
  const [hideNavbar, setHideNavbar] = useState(false)
  const [hideSideBar, setHideSideBar] = useState(false)
  const [hideSaveChanges, setHideSaveChanges] = useState(false)
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState()
  const [userData, setUserData] = useState([])
  const [pages, setPages] = useState([
    {
      name: "Home", 
      ind: false, 
      icon: (<span className='material-icons'>home</span>),
      page: <Home />,
      path: "/Acad/"
    },
    {
      name: "Tasks", 
      ind: false, 
      icon: (<span className='fa fa-book'></span>),
      page: <Tasks />,
      path: "/Acad/Tasks"
    },
    {
      name: "Folders", 
      ind: false, 
      icon: (<span className='material-icons'>folder</span>),
      page: <Folders />,
      path: "/Acad/Folders"
    },
    {
      name: "Contacts", 
      ind: false, 
      icon: (<span className='material-icons'>phone</span>),
      page: <Contacts />,
      path: "/Acad/Contacts"
    },
  ])

  const contextVariables = {
    // Booleans
    showSignUp,
    setShowSignUp,
    showLogin,
    setShowLogin,
    showMakeUserSignIn,
    setShowMakeUserSignIn,
    hideNavbar,
    setHideNavbar,
    hideSideBar,
    setHideSideBar,
    hideSaveChanges,
    setHideSaveChanges,
    loading,
    setLoading,

    // Arrays & Objects
    user,
    setUser,
    userData,
    setUserData,
    pages,
    setPages,

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
          <Loading></Loading>
          <SaveChanges></SaveChanges>
        </BrowserRouter>
      </context.Provider>
    </>
  )
}

export default App
