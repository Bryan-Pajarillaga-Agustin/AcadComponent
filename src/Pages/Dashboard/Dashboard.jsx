import s from "./Dashboard.module.css"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar"
import Profile from "./LeftComponents/Profile/Profile"
import Contacts from "./LeftComponents/Contacts/Contacts"
import Skills from "./LeftComponents/Skills/Skills"
import Forms from "./RightComponents/Forms/forms"
import Selections from "./RightComponents/Selections/Selections"
import Bio from "./RightComponents/Bio/Bio"
import ChangesInAccount from "./ChangesPrompt/Changes"

import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"

import { context } from "../../App"

export const dashboardContext = createContext()
const Dashboard = () => {
    const { userData, user, setLoading, getDataFromFireStore } = useContext(context)

    const skillRef = useRef()

    // for forms

    const [uName, setUName] = useState()
    const [school, setSchool] = useState()
    const [pBirth, setPBirth] = useState()
    const [age, setAge] = useState()
    const [bDay, setBDay] = useState()
    const [gender, setGender] = useState()
    const [hobbies, setHobbies] = useState()
    const [grSec, setGrSec] = useState()

    // for Selections

    const [purpose, setPurpose] = useState()
    const [usingAs, setUsingAs] = useState()
    const [desc, setDesc] = useState()


    const [editAccount, setEditAccount] = useState(false)
    const [showChanges, setShowChanges] = useState(false)


    const [skills, setSkills] = useState([])
    const [contacts, setContacts] = useState([])
    const [favSubjects, setFavSubjects] = useState([])
    // accInformation?.personalInfo?.skills.map((skill)=>{return{...skill}})


    function addSkill() {
        if (skillRef.current?.value != "") {
            setSkills(prev => [...prev, skillRef.current?.value])
        }
    }

    const saveAccountChanges = async () => {
        setLoading(true)
        try {
            await updateDoc(doc(db, "Users", user?.uid), {
                perInfo: {
                    school: school,
                    name: uName,
                    grSec: grSec,
                    age: age,
                    bDay: bDay,
                    gender: gender,
                    hobbies: hobbies,
                    placeOfBirth: pBirth,
                    purpose: purpose
                },
                usingAs: usingAs,
                favSubjects: favSubjects,
                description: desc,
                contacts: contacts,
                skills: skills
            })

            getDataFromFireStore(user)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const variables = {
        // Main context variables
        userData,
        user,
        setLoading,

        // Ref
        skillRef,

        // Input States
        uName, setUName,
        school, setSchool,
        pBirth, setPBirth,
        age, setAge,
        bDay, setBDay,
        gender, setGender,
        hobbies, setHobbies,
        grSec, setGrSec,
        purpose, setPurpose,
        usingAs, setUsingAs,
        desc, setDesc,
        // boolean
        editAccount, setEditAccount,
        showChanges, setShowChanges,
        // Arrays and Objects
        skills, setSkills,
        contacts, setContacts,
        favSubjects, setFavSubjects,

        // Functions
        addSkill,
        saveAccountChanges
    }

    useEffect(() => {
        if (userData) {
            setUName(userData.perInfo?.name)
            setSchool(userData.perInfo?.school)
            setPBirth(userData.perInfo?.placeOfBirth)
            setAge(userData.perInfo?.age)
            setBDay(userData.perInfo?.bDay)
            setGender(userData.perInfo?.gender)
            setHobbies(userData.perInfo?.hobbies)
            setGrSec(userData.perInfo?.grSec)
            setUsingAs(userData?.usingAs)
            setPurpose(userData?.perInfo?.purpose)
            setDesc(userData?.description)
            setContacts(userData?.contacts ? userData?.contacts : [])
            setSkills(userData?.skills ? userData?.skills : [])
        }
    }, [userData])

    return (
        <>
            <dashboardContext.Provider value={variables}>
                <div className={s.dashboardWrapper}>
                    <nav className={s.navBar}>
                        <h1>PERSONAL INFORMATIONS</h1>
                        <DashboardNavbar editAccount={editAccount}
                            setEditAccount={val => setEditAccount(val)}
                            saveAccountChanges={() => saveAccountChanges()}
                            setShowPersonalInformation={val => setShowPersonalInformation(val)}
                            setShowChanges={val => setShowChanges(val)} >
                        </DashboardNavbar>
                    </nav>
                    <div className={s.dashboardBox}>
                        <div className={s.left}>
                            <Profile />
                            <Skills />
                            <Contacts />
                        </div>
                        <div className={s.right}>
                            <div className={s.top}>
                                <Forms />
                            </div>
                            <div className={s.mid}>
                                <Selections />
                            </div>
                            <div className={s.bottom}>
                                <Bio />
                            </div>
                        </div>
                    </div>
                </div>
                <ChangesInAccount editAccount={editAccount}
                    setEditAccount={(val) => setEditAccount(val)}
                    saveAccountChanges={() => saveAccountChanges()}
                    showChanges={showChanges}
                    setShowChanges={val => setShowChanges(val)} />
            </dashboardContext.Provider>
        </>
    )
}

export default Dashboard