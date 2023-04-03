import Styles from"./styles.module.scss"
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {AiFillLinkedin} from "react-icons/ai"
import { Link} from "react-router-dom"
import store from "../../Img/store.png"


export function Login({text1, text2,text3,text4,Span,img,input1,input2,input3,input4,Botao,to,to1, SubmitBtn,handleclikButtonGoogle}){
     

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
                    <form onSubmit={SubmitBtn}>
                    {input1}
                    {input2}
                    {input3}
                    {input4}
                    {Botao}
                    
                    
                    </form>
                    </div>
                    <p>{text3} <span><Link to={to1}>{text4}</Link></span></p>
                     <p>{text1}</p>
                     <div className={Styles.Screnlogin_SecondColumIcons}>
                        <div className={Styles.Screnlogin_SecondColumIcon}>
                            <button > <BsFacebook/></button>
                        </div>

                       <div className={Styles.Screnlogin_SecondColumIcon}>
                           <button onClick={ handleclikButtonGoogle}> <FcGoogle/></button>
                       </div>

                        <div className={Styles.Screnlogin_SecondColumIcon}>
                            <button><AiFillLinkedin/></button>
                        </div>
                     </div>
                     
                     <p>{text2} <span><Link to={to}>{Span}</Link></span></p>
                    </div>
                    
                </div>
            </div>

        </div>
   
    )
}