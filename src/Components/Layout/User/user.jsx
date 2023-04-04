import Styles from"./styles.module.scss"
import {auth} from '../../../../Backend/Service/firbase'
import {ImCross} from "react-icons/im"
import { LinkButton } from "../Button/button"
import { useState ,useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} from "../../../Redux/Slice/Authslice"
import {ShowLogin, ShowLogout} from "./HidenUserLink/hidenuserLink"

export function UserMenu({setUserMenu}){
    const [userNames, SetUserName] = useState('')
    const [userEmail, SetUserEmail] = useState('')
    const [userPhoto, SetUserPhoto] = useState('')
    const dispatch = useDispatch()
   
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