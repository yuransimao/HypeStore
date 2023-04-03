import Styles from"./styles.module.scss"
import { Link } from "react-router-dom"
import {ImCross} from "react-icons/im"

export function UserMenu({setUserMenu}){
    


    return(

        <div className={Styles.User}>

                        <div className={}>
                            <div>
                            <Link to='/SIGNUP'>Sign up</Link>
                                                </div>
                                                <div>
                            <Link to='/SIGNIN'>Sign In</Link>
                                                </div>
                        </div>

            <button className={Styles.User_btnCross} onClick={() => setUserMenu(false)}><ImCross/></button>
       
        </div>
    )
}