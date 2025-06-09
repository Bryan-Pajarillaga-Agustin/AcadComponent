import s from "./Profile.module.css"
import Button from "../../../../Components/Button"
import { useState, useRef, useEffect, useContext } from "react"
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { auth, cloudDB, db } from "../../../../Firebase/Firebase"
import { updateDoc, doc } from "firebase/firestore"
import { dashboardContext } from "../../Dashboard"
import image from "./ViewProfilePicture.module.css"

const Profile = () => {
    const { userData, editAccount, user, setLoading } = useContext(dashboardContext)
    // refs
    const inputImgRef = useRef()

    const [profPic, setProfPic] = useState(null)
    const [showUpPic, setShowUpPic] = useState(false)
    const [upPicLinks, setUpPicLinks] = useState([])
    // JSON.parse(localeStorage.getItem("uploadedPicLinks")

    const getImages = async () => {
        setLoading(true)
        try {
            let arrOfImgs = []
            const snap = await listAll(ref(cloudDB, `${auth.currentUser?.uid}/Uploaded_Profile_Pictures`))

            for (let i in snap.items) {
                const url = await getDownloadURL(snap.items[i])
                arrOfImgs.unshift({ img: url, id: Math.random() * 1, fileName: snap.items[i].name })
            };
            setUpPicLinks([...arrOfImgs])
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const handleOnChangePic = async (e) => {
        setLoading(true)
        const file = e
        if (file) {
            let letters = "qwertyuiopasdfghjklzxcvbnm";
            let randId = "";
            for (let i = 0; i < 15; i++) {
                let random = Math.floor(Math.random() * (letters.length)); //Corrected random number generation
                randId = randId.concat(letters[random]);
            }
            const imageRef = ref(cloudDB, auth.currentUser.uid + `/Uploaded_Profile_Pictures/${file.name + "_" + randId}`)
            await uploadBytes(imageRef, file)
            getDownloadURL(imageRef).then((url) => {
                setUpPicLinks(prev => [{ img: url, id: Math.random() * 1, fileName: file.name + "_" + randId }, ...prev])
            })
        } else {
            console.log("No file selected.");
        }
        setLoading(false)
    }

    const handleChangePic = async (url) => {
        setLoading(true)
        try {
            await updateDoc(doc(db, "Users", auth.currentUser?.uid), {
                profPic: url
            })
            inputImgRef.current.style.backgroundImage = `url(${url})`
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const handleDeletePic = async (fileName) => {
        setLoading(true)
        try {
            await deleteObject(ref(cloudDB, `/${auth.currentUser?.uid}/Uploaded_Profile_Pictures/${fileName}`))
            getImages()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [user])

    // Component 1

    const ViewProfile = () => {


        if (profPic) return (
            <div className={image.pictureWrapper} style={{backgroundImage: `url(${profPic})`}}>
                <Button icon={(<i className="fa fa-close"></i>)}
                    className={image.hidePromptButt}
                    func={() => { setProfPic(false) }}>
                </Button>
            </div>
        )
    }


    return (
        <>
            <div className={s.profileImgWrapper}>
                <div ref={inputImgRef}
                    className={s.profPic} style={userData?.profPic
                        ? { backgroundImage: `url(${userData.profPic})` }
                        : { backgroundImage: "url(./blue-circle-with-white-user.png)" }}
                    onClick={() => { setProfPic(userData.profPic) }}>
                </div>
                <div className={s.uploadPictureWrapper}>
                    {
                        editAccount ?
                            <Button content={"Change Profile"}
                                func={() => { showUpPic ? setShowUpPic(false) : setShowUpPic(true) }}
                            ></Button> :
                            <h2>Profile Picture</h2>
                    }

                    <div className={showUpPic ? s.showUploadedPictures : s.hideUploadedPictures}>
                        <div className={s.uploadedPicBox}>
                            <Button icon={(<i className="fa fa-close"></i>)}
                                className={s.hidePromptButt}
                                func={() => { setShowUpPic(false) }}>
                            </Button>
                            <h2>Upload Task</h2>
                            <div className={s.bottom}>
                                <label htmlFor="imgInput">
                                    <i className="fa fa-plus"></i>
                                </label>
                                <input type="file" accept="image/*" id="imgInput" onChange={(e) => { handleOnChangePic(e.target.files[0]) }} style={{ display: "none" }} />
                                {
                                    upPicLinks?.map((link) => {
                                        return (
                                            <div key={link?.id} >
                                                <Button icon={(<i className="fa fa-close"></i>)}
                                                    className={s.clearButt}
                                                    func={() => handleDeletePic(link?.fileName)}></Button>
                                                <div style={{ backgroundImage: `url(${link.img})` }} onClick={() => { handleChangePic(link?.img) }}></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ViewProfile />
        </>
    )
}

export default Profile