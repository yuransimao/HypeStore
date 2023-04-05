import Styles from"./styles.module.scss"
import {auth} from '../../../../Backend/Service/firbase'
import {ImCross} from "react-icons/im"
import { LinkButton } from "../Button/button"
import { useState ,useEffect } from "react"
import {  onAuthStateChanged,  signOut } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} from "../../../Redux/Slice/Authslice"
import {ShowLogin, ShowLogout} from "./HidenUserLink/hidenuserLink"


export function UserMenu({setUserMenu}){
    const [userNames, SetUserName] = useState('')
    const [userEmail, SetUserEmail] = useState('')
    const [userPhoto, SetUserPhoto] = useState('')
    const [userID, SetUserID] = useState('')
    const dispatch = useDispatch() 


    const SignOut = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }


    
   
    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              if(user.displayName == null){
                  const name = user.email.substring(0, user.email.indexOf('@'))
                  const uName = name.charAt(0).toUpperCase() + name.slice(1)
                  SetUserName(uName)
              
              }
              else{
                SetUserName(user.displayName)
                SetUserEmail(user.email)
                SetUserPhoto(user.photoURL)
                SetUserID(user.uid)
              }
              const uid = user.uid;

              dispatch( SET_ACTIVE_USER({
                email:user.email,
                userName: user.displayName ? user.displayName : userNames ,
                userID: user.uid,
                userPHOTO: user.photoURL
              },))
            } else {
              dispatch(REMOVE_ACTIVE_USER())
            }
          });
    },[])


    return(

        <div className={Styles.User}>
            <button className={Styles.User_btnCross} onClick={() => setUserMenu(false)}><ImCross/></button>
          <ShowLogin>
            <div className={Styles.User_container}>
            <div className={Styles.User_Img}>
              <img src={userPhoto} alt={userNames}/>
            </div>
            <div className={Styles.userText}>
              <h1> Your name:<span>{userNames}</span></h1>
              <h2>email: <span>{userEmail}</span></h2>
              <h3>ID: <span>{userID}</span></h3>
            </div>
            <button onClick={SignOut}>Sign Out</button>
            </div>
            </ShowLogin>
          <ShowLogout>
        <div className={Styles.Userlink}>
           

                <div className={Styles.LinkButton}>
            <LinkButton to='/SIGNIN'
            txt={'Sign In'}
            ClassBtn={'BotN1'}
            />
            </div>
            <div className={Styles.LinkButton}>
            <LinkButton ClassBtn={'BotN2'}to='/SIGNUP'
            txt='Sign up'
            />
            </div>
        </div>
        </ShowLogout>

           
       
        </div>
    )
}