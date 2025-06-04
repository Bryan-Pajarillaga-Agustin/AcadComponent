import s from "./FoldersBottomNavbar.module.css"

const FoldersBottomNavbar = ({deleteSelectedFolder, setSelecting, handleSelectingAll}) => {
    

    return <div className={s.foldersBottomNav}>
                <div className={s.left}>
                    <button onClick={()=>{handleSelectingAll(true)}}>
                        <i className="fa fa-check"></i>
                        <span className={s.fullContent}>Select All</span>
                    </button>
                    <button onClick={()=>{handleSelectingAll(false)}}>
                        <i className={`${"fa fa-check-square"} ${s.uncheck}` }></i>
                        <span className={s.fullContent}>Unselect All</span>
                    </button>
                </div>
                <div className={s.right}>
                    <button onClick={()=>{deleteSelectedFolder()}}>
                        <i className="fa fa-trash"></i>
                        <span className={s.fullContent}>Delete</span>
                    </button>
                    <button onClick={()=>{setSelecting(false), handleSelectingAll(false)}}>
                        <i className="fa fa-close"></i>
                        <span className={s.fullContent}>Cancel</span>
                    </button>
                </div>
            </div>
}

export default FoldersBottomNavbar