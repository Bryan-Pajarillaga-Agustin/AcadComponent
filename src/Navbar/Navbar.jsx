import { useState } from 'react'
import s from './NavBar.module.css'
import { useContext, useEffect } from 'react'
import { context } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Components/Button'

const NavBar = () => {
    const navigation = useNavigate()
    const { pages, setPages, 
            user, setPrevPage, 
            setHideSideBar, hideSideBar,
            setIsSigningOut, changes,
            setSaveChanges, prevPage } = useContext(context)
    function changeTab(i, path) {
        

        if(changes && pages[1].ind) {
            setSaveChanges(true)
        } else {
            navigation(path)
            setPages(prev => prev.map((tab, index) =>
                index == i ?
                    { ...tab, ind: true } :
                    { ...tab, ind: false }
            ))
        }
        
    }

     return (
        <>
            <div className={s.navBarWrapper}>
                <div className={s.left}>
                    <img src="./web-icon.png" />
                    <h1 className={s.title}>
                        Acad
                    </h1>
                </div>
                <div className={s.mid}>
                    <ul>
                        {
                            pages?.map((tab, i) => {
                                return (
                                    <li
                                        key={tab.name}
                                        className={tab.ind ? `${s.ind} ${s.Links}` : `${s.notInd} ${s.Links}`}
                                        onClick={() => {changeTab(i, tab.path), setPrevPage(tab.path)}}
                                    >
                                        <span className={s.content}>
                                            {tab.icon}
                                            {tab.name}
                                        </span>
                                        <span className={s.indicator}></span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    user?.uid ?
                    <div className={s.right}>
                        <Link to={"/Dashboard"} className={s.Links} ><button className={s.authButts}>Account</button></Link>
                        <button className={`${s.authButts} ${s.signOut}`} onClick={()=>{setIsSigningOut(true)}} >Log Out</button>
                        <button className={s.HamburgerButt} onClick={()=>{setHideSideBar(false)}}><i className="fa fa-list-ul"></i></button>
                    </div>  : 
                    <div className={s.right}>
                        <Link to={"/SignIn"} className={s.Links}>
                            <button className={s.authButts} >Sign In</button>
                        </Link>
                        <Link to={"/SignUp"} className={s.Links}>
                            <button className={`${s.authButts} ${s.signUp}`} >Sign Up</button>
                        </Link>
                        
                        <button className={s.HamburgerButt} onClick={()=>{setHideSideBar(false)}}><i className="fa fa-list-ul"></i></button>
                    </div>
                }
            </div>

            <div className={hideSideBar == false ? s.sidebar : s.hideSideBar}>
                <ul className={hideSideBar == false ? s.NavLinks : s.hideNavLinks}>
                    <Button className={s.HamburgerButt} func={() => { !hideSideBar ? setHideSideBar(true) : setHideSideBar(false) }} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                    {
                        pages.map((link, i) => {
                            return (
                                <li
                                    to={link.path}
                                    key={link.path}
                                    onClick={() => { changeTab(i, link.path), setPrevPage(link.path) }}
                                    className={link.ind ? `${s.Links} ${s.indicated}` : `${s.Links} ${s.notIndicated}`}>
                                    {link.icon}
                                    <span>
                                        {link.name}
                                        <span className={s.indication}></span>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NavBar