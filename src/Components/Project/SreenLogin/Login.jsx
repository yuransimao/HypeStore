import Styles from"./styles.module.scss"
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {AiFillLinkedin} from "react-icons/ai"
import { Link} from "react-router-dom"
import store from "../../Img/store.png"


export function Login(props){
     

    return (
        <div className={Styles.Screnlogin_container}>

        <div className={Styles.Screnlogin_content}>

            <div className={Styles.Screnlogin_firstContent}>
                <div className={Styles[props.CustomClass]}>
               
                
               <div className={Styles.Screnlogin_img}
               ><img src={props.img} alt="ilustracion" />
               </div>
                    
             
                </div>

                <div className={Styles[props.CustomClas]}>
                   
                   <div className={Styles.ScrenLoginlogo}><Link to="/"> <img  src={store} alt="logo" /></Link>
                   </div>

                   <div className={Styles.FormLogin}>
                    <form onSubmit={props.SubmitBtn}>
                    {props.input1}
                    {props.input2}
                    {props.input3}
                    {props.input4}
                    {props.Botao}
                    
                    
                    </form>
                    </div>
                    <p>{props.text3} <span><Link to={props.to1}>{props.text4}</Link></span></p>
                     <p>{props.text1}</p>
                     <div className={Styles.Screnlogin_SecondColumIcons}>
                        <div className={Styles.Screnlogin_SecondColumIcon}>
                            <button > <BsFacebook/></button>
                        </div>

                       <div className={Styles.Screnlogin_SecondColumIcon}>
                           <button onClick={ props.handleclikButtonGoogle}> <FcGoogle/></button>
                       </div>

                        <div className={Styles.Screnlogin_SecondColumIcon}>
                            <button><AiFillLinkedin/></button>
                        </div>
                     </div>
                     
                     <p>{props.text2} <span><Link to={props.to}>{props.Span}</Link></span></p>
                    </div>
                    
                </div>
            </div>

        </div>
   
    )
}