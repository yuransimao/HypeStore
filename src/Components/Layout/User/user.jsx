import Styles from"./styles.module.scss"

import {ImCross} from "react-icons/im"
import { LinkButton } from "../Button/button"
export function UserMenu({setUserMenu}){
    


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