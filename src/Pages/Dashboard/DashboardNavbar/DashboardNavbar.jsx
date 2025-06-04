import s from './DashboardNavbar.module.css'
import Button from '../../../Components/Button'
import { useNavigate } from 'react-router-dom'
import { dashboardContext } from '../Dashboard'
import { useContext } from 'react'
import { context } from '../../../App'

const DashboardNavbar = () => {
    const {editAccount, setEditAccount, saveAccountChanges, setShowChanges} = useContext(dashboardContext)
    const {prevPage} = useContext(context)
    const navigation = useNavigate()
    function handleHideAccountTab(){
        if(editAccount) {
            setShowChanges(true)
        } else {
            navigation(prevPage)
            setEditAccount(false)
        }
    }

    // Component 1 - Left

    const SaveChanges = () => {
        if(editAccount){
            return (
                <>
                    <Button icon={(<i className="fa fa-save"></i>)}
                            content={"SaveChanges"}
                            className={s.editButt}
                            func={()=>{saveAccountChanges(), setEditAccount(false)}}
                    ></Button>
                </>
            )
        } else {
            return (
                <>
                    <Button icon={(<i className="fa fa-edit"></i>)}
                            content={"Edit Information"}
                            className={s.editButt}
                            func={()=>{setEditAccount(true)}}
                    ></Button>
                </>
            )
        }
    }

    return (
        <div className={s.dashboardNavbarWrapper}>
            <SaveChanges></SaveChanges>
            <Button icon={(<i className="fa fa-close"></i>)}
                    className={s.Hide_Prompt_Button}
                    func={()=>{handleHideAccountTab()}}>
            </Button>
        </div>
    )
}

export default DashboardNavbar