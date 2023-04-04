import Styles from"./styles.module.scss"
import {auth} from '../../../../Backend/Service/firbase'
import {ImCross} from "react-icons/im"
import { LinkButton } from "../Button/button"
import { useState ,useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {SET_ACTIVE_USER} from "../../../Redux/Slice/Authslice"

export function UserMenu({setUserMenu}){
    const [userNames, SetUserName] = useState('')
    const [userEmail, SetUserEmail] = useState('')
    const [userPhoto, SetUserPhoto] = useState('')
    const dispatch = useDispatch()
   
    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              if(user.displayName == nul){
                  const name = user.email.slice(0, -10)
                  const uName = name.charAt(0).toUpperCase() + name.slice(1)
                  SetUserName(uName)
              }
              const uid = user.uid;
              console.log(user.displayName, user.email, user.photoURL)
              dispatch( SET_ACTIVE_USER({
                email:user.email,
                userName: user.displayName ? user.displayName : userNames ,
                userID: user.uid,
                userPHOTO: user.photoURL
              },))
            } else {
              // User is signed out
              // ...
            }
          });
    },[])


    return(

        <div className={Styles.User}>
            <button className={Styles.User_btnCross} onClick={() => setUserMenu(false)}><ImCross/></button>
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

           
       
        </div>
    )
}