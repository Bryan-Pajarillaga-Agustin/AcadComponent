import s from "./MakeUserSignIn.module.css"
import Button from "../../Components/Button"
import { useContext } from "react"
import { context } from "../../App"
import { Link, useNavigate } from "react-router-dom"

const MakeUserSignIn = () => {
    const { showMakeUserSignIn, setShowMakeUserSignIn, 
            user, pagination } = useContext(context)

    
    return (
        <>
            <div className={showMakeUserSignIn && !user ? s.makeUserSignInWrapper : s.hideMakeUserSignInWrapper}>
                <div className={s.makeUserSignInBox}>
                    <Link
                        className={s.hidePromptButton}
                        to={"/"}
                        onClick={()=>{pagination(0), setShowMakeUserSignIn(false)}}>
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
                            to={"/SignUp"}
                            onClick={()=>{setShowMakeUserSignIn(false)}}>
                                Sign Up
                        </Link>
                        <Link
                            className={s.Links}
                            to={"/SignIn"}
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