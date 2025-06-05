import s from "./Changes.module.css"
import Button from "../../../Components/Button"
import { db } from "../../../Firebase/Firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useContext, useEffect } from "react"
import { context } from "../../../App"
import { tasksContext } from "../Tasks"
const SaveChanges = () => {
    const { saveChanges, setSaveChanges, user,
        setHideSideBar, setLoading,
        setChanges, setTasksCache } = useContext(context)

    const { setNumberOfChanges,
        numberOfChanges, backUpNavigation} = useContext(tasksContext)


    const { setTasks } = useContext(tasksContext)

    const saveToDataBase = async () => {
        let changes = JSON.parse(localStorage.getItem("Changes"))
        if (changes) {
            console.log(numberOfChanges)
            changes = [...changes[numberOfChanges]]
            changes = changes.map((task) => {
                return { ...task, isChecked: false }
            })
            const userUID = user?.uid?.toString();
            const docRef = doc(db, `Users/${userUID}`);
            setLoading(true)
            try {
                await updateDoc(docRef, { tasks: changes });  //Update from local state after successful write
                setNumberOfChanges(null)
                setTasks([...changes])
                setChanges(null)
                localStorage.removeItem("Changes")
                setTasksCache([...changes])
                backUpNavigation()
            } catch (error) {
                setSaveChanges(false)
                console.log("Error writing task:", error);
            }

            setLoading(false)
            setHideSideBar(true)
        }
    }

    if (saveChanges) return (
        <div className={s.Changes_Wrapper}>
            <div className={s.Changes_Box}>
                <Button
                    icon={(<i className="fa fa-close"></i>)}
                    className={s.closeButton}
                    func={() => { setSaveChanges(false) }} />
                <div className={s.Top}>
                    <i className='fa fa-warning'></i>

                    <h3>Would You Save Your Previous Changes?</h3>
                </div>
                <div className={s.Options}>
                    <Button
                        content={"No"}
                        func={() => { setSaveChanges(false), localStorage.removeItem("Changes"), window.location.reload() }} />
                    <Button
                        content={"Yes"}
                        func={() => { setSaveChanges(false), saveToDataBase() }} />
                </div>
            </div>
        </div>
    )
}

export default SaveChanges