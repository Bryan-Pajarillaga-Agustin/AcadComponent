import s from "./Loading.module.css"
import { context } from "../../App"
import { useContext } from "react"

const Loading = () => {
  const {loading} = useContext(context)
  if (loading)
    return (
      <div className={s.loadingWrapper}>
        <div className={s.loadingBar}>

        </div>
        Loading...
      </div>
    )
}

export default Loading