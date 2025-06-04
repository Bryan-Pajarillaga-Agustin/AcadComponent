import s from "./Loading.module.css"

const Loading = ({loading}) => {
    if(loading) 
            return (
                <div className={s.loadingWrapper}>
                    <div className={s.loadingBar}>
                        
                    </div>
                    Loading...
                </div>
            )
}

export default Loading