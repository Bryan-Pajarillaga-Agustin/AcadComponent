import { useState } from "react"
import s from "./Rates.module.css"
import Button from "../../../Components/Button"

const Rates = () => {
    const [stars, setStars] = useState([
        {
            img: "./Contacts/star.png",
            id: Math.random() * 1000,
            ind: false
        },
        {
            img: "./Contacts/star.png",
            id: Math.random() * 1000,
            ind: false
        },
        {
            img: "./Contacts/star.png",
            id: Math.random() * 1000,
            ind: false
        },
        {
            img: "./Contacts/star.png",
            id: Math.random() * 1000,
            ind: false
        },
        {
            img: "./Contacts/star.png",
            id: Math.random() * 1000,
            ind: false
        }
    ])
    const [prevRate, setPrevRate] = useState()

    function handleRating (index) {
        setStars(prev => prev.map((star, i) => 
            i <= index ?
                {...star, ind: true} :
                {...star, ind: false}
        )) 
    }
    
    return <div className={s.rateWrapper}>
                <h3>Rate This Web App</h3>
                <div className={s.starsWrapper}>
                    {
                        stars.map((star, i) => {
                            return <Button 
                                key={star.id}
                                className={s.stars}
                                element={(<img src={ 
                                    star.ind ? 
                                    "./Contacts/star.png" :
                                    "./Contacts/star (1).png"
                                 }/>)}
                                func={()=>{
                                    i != prevRate ? 
                                        handleRating(i) : 
                                        setStars(prev => prev.map(star => {
                                            return {...star, ind: false}
                                        }))
                                    
                                    i != prevRate ? 
                                        setPrevRate(i) :
                                        setPrevRate(null)
                                }}/>
                        })
                    }
                </div>
            </div>
}

export default Rates