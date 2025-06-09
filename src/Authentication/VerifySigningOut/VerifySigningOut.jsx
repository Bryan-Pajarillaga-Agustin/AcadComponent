import s from "./VerifySigningOut.module.css"
import Button from "../../Components/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase/Firebase"
import { useContext, useEffect } from "react"
import { context } from "../../App"
const VerifySigningOut = () => {
    const { isSigningOut, setIsSigningOut, setLoading, setUser, userData, setTasksCache, setFoldersCache } = useContext(context)

    const handleSignOut = async () => {
        setLoading(true)
        try {
            await signOut(auth)
            setUser(null)
            setLoading(false)
            setIsSigningOut(false)
            setTasksCache([])
            setFoldersCache([])
        } catch (e) {
            setLoading(false)
            setIsSigningOut(false)
            console.log(e)
        }
    }


    if (isSigningOut) return (
        <div className={isSigningOut ? s.Signing_Out_Wrapper : s.Hide_Signing_Out_Wrapper}>
            <div className={s.Signing_Out_Box}>
                <div className={s.Top}>
                    {
                        userData?.profPic ?
                            <div style={{ backgroundImage: `url(${userData.profPic})` }}></div> :
                            <i className='fa fa-user'></i>
                    }
                    <h3>Would You Like To Sign Out?</h3>
                </div>
                <div className={s.Options}>
                    <Button
                        content={"No"}
                        func={() => { setIsSigningOut(false) }} />
                    <Button
                        content={"Yes"}
                        func={() => { handleSignOut() }} />
                </div>
            </div>
        </div>
    )
}

export default VerifySigningOut