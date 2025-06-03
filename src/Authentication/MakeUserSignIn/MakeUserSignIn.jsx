import s from "./MakeUserSignIn.module.css"
import Button from "../../Components/Button"
import { useContext } from "react"
import { context } from "../../App"
import { Link } from "react-router-dom"

const MakeUserSignIn = () => {
    const { showMakeUserSignIn, setShowMakeUserSignIn, 
            setPage, user } = useContext(context)

    function handleExitMakeUserSignIn(){
        setShowMakeUserSignIn(false)
        setPage(1)
        let link = window.location.href
        link.toLowerCase()
        let index = link.search("/Acad/")
        link = link.slice(0, index + 6).concat("#Home")

        window.location.href = link
    }
    
    return (
        <>
            <div className={showMakeUserSignIn && !user ? s.makeUserSignInWrapper : s.hideMakeUserSignInWrapper}>
                <div className={s.makeUserSignInBox}>
                    <Link
                        className={s.hidePromptButton}
                        to={"/AcadComponent/"}
                        onClick={()=>{handleExitMakeUserSignIn()}}>
                        <i className="fa fa-close"></i>
                    </Link>
                    <div className={s.Images}>
                        <img src="./cat.png" />
                        <img src="./!.png" />
                    </div>
                    <h1>You're not Signed In !</h1>
                    <p>Create an account, log in and get free access to the advanced To-Do List Web Application</p>
                    <div className={s.Buttons}>
                        <Link
                            className={s.Links}
                            to={"/AcadComponent/SignUp"}
                            onClick={()=>{setShowMakeUserSignIn(false)}}>
                                Sign Up
                        </Link>
                        <Link
                            className={s.Links}
                            to={"/AcadComponent/SignIn"}
                            onClick={()=>{setShowMakeUserSignIn(false)}}>
                                Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeUserSignIn