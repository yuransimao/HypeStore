import Styles from"./styles.module.scss"
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {AiFillLinkedin} from "react-icons/ai"
import { Link} from "react-router-dom"
import store from "../../Img/store.png"
import {firebase, auth, app} from "../../../Service/firbase"
import { async } from "@firebase/util"

export function Login({text1, text2,Span,img,input1,input2,input3,input4,Botao,to}){
     const handleclikButtonGoogle = async () =>{
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider)
        console.log(result)

     } 
     const handleclikButtonFB = async () =>{
        const provider = new firebase.auth.FacebookAuthProvider();

        const result = await auth.signInWithPopup(provider)
        console.log(result)

     } 

    return (
        <div className={Styles.Screnlogin_container}>

        <div className={Styles.Screnlogin_content}>

            <div className={Styles.Screnlogin_firstContent}>
                <div className={Styles.Screnlogin_FirstColum}>
               

               <div className={Styles.Screnlogin_img}
               ><img src={img} alt="ilustracion" />
               </div>
                    
             
                </div>

                <div className={Styles.Screnlogin_SecondColum}>
                   
                   <div className={Styles.ScrenLoginlogo}><Link to="/"> <img  src={store} alt="logo" /></Link>
                   </div>

                   <div className={Styles.FormLogin}>
                    <form>
                    {input1}
                    {input2}
                    {input3}
                    {input4}
                    {Botao}
                    
                    
                    </form>
                    </div>

                     <p>{text1}</p>
                     <div className={Styles.Screnlogin_SecondColumIcons}>
                        <div className={Styles.Screnlogin_SecondColumIcon}>
                            <Link onClick={handleclikButtonFB}><BsFacebook/></Link>
                        </div>

                       <div className={Styles.Screnlogin_SecondColumIcon}>
                           <Link onClick={ handleclikButtonGoogle}> <FcGoogle/></Link>
                       </div>

                        <div className={Styles.Screnlogin_SecondColumIcon}>
                            <Link><AiFillLinkedin/></Link>
                        </div>
                     </div>
                     <p>{text2} <span><Link to={to}>{Span}</Link></span></p>
                    </div>
                    
                </div>
            </div>

        </div>
   
    )
}