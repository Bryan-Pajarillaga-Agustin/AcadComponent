import { useContext, useEffect } from "react"
import Button from "../../Components/Button"
import s from "./About.module.css"
import Rates from "./Rates/Rates"
import ReportBugs from "./ReportBugs/ReportBugs"
import {context} from '../../App'

const About = () => {
  const {setPages} = useContext(context)

  const platforms = [
    {
      name: "Facebook",
      content: "Bryan A. Pajarillaga",
      link: "https://www.facebook.com/share/1EjwVzkG5N/",
      src: "./platforms/facebook.png"
    },
    {
      name: "Gmail",
      content: "Bryanagustinpajarillaga@gmail.com",
      link: "bryanagustinpajarillaga@gmail.com",
      src: "./platforms/gmail.png"
    },
    {
      name: "Github",
      content: "Code With Bry",
      link: "https://github.com/CodeWithBry",
      src: "./platforms/github.png"
    }
  ]

  function handleCopy(i) {
    navigator.clipboard.writeText(platforms[i].link)
    alert("Text Copied!")
  }

  useEffect(() => {
        setPages(prev => prev.map((p) =>
            p.name === "About" ?
                { ...p, ind: true } :
                { ...p, ind: false }
        ))
    }, [])


  return (
    <div className={s.aboutWrapper}>
      <div className={s.left}>
        {
          platforms.map((ea, i) => {
            return <div
              style={{ backgroundImage: `url(${ea.src})` }}
              className={s.platforms}
            >
              <div className={s.top}>
                <h3>{ea.name}</h3>
                <Button
                  content={"Copy Link"}
                  func={()=>{handleCopy(i)}} />
              </div>
              <a
                href={ea.link}
                className={s.bottom}>
                <h3>{ea.content}</h3>
              </a>
            </div>
          })
        }
      </div>
      <div className={s.right}>
        <Rates />
        <ReportBugs />
      </div>
    </div>
  )
}

export default About