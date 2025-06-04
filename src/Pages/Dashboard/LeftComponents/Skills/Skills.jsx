import s from "./Skills.module.css"
import Button from "../../../../Components/Button"
import { useContext, useEffect, useRef, useState } from "react"
import { dashboardContext } from "../../Dashboard"
const Skills = () => {
    const {skills, addSkill, editAccount, setSkills, skillRef} = useContext(dashboardContext)

    const [showInput, setShowInput] = useState(false)

    function handleSubmitSkill(){
        if(skills?.current?.value == "") {
            setShowInput(false)
        } else {
            addSkill()
            setShowInput(false)
        }

        
        skillRef.current.value = ""
    }


    function deleteSkill(ind){
        let data = skills 
        for(let i in data) {
            if(ind == i) {
                data.splice(i, 1)
            }
        }
        setSkills([...data])
    }


    return (
        <form className={s.skillsWrapper} onSubmit={(e)=>{e.preventDefault()}}>
            <div className={s.addSkillsWrapper}>
                <h3>Skills:</h3>
                <label htmlFor="blankSkill" style={editAccount ? {display: "flex"} : {display: "none"}} onClick={()=>setShowInput(true)}><i className="fa fa-plus"></i></label>
            </div>
            <div className={s.skillsBox}>
                {
                    skills?.map((skill, i)=>{
                        return (
                            <li key={skill}>
                                <span><input type="text" value={skill} readOnly /></span>
                                {
                                    editAccount ? 
                                    <Button icon={(<i className="fa fa-close"></i>)}
                                    className={s.hidePromptButton}
                                    func={()=>{deleteSkill(i)}}>
                                    </Button> : 
                                    null
                                }
                            </li>
                        )
                    })
                }
                <div className={showInput ? s.showInput : s.hideInput}>
                    <input type="text" id="blankSkill" ref={skillRef} />
                    <Button content={"Submit"}
                            func={()=>{handleSubmitSkill()}}
                    ></Button>
                </div>
            </div>
        </form>
    )
}

export default Skills