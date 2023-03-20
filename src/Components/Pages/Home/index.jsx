
import Styles from"./styles.module.scss"

import {Swippers} from"../../Layout/Slide/Swiper"













export function Home ({funcNav}){
   

    funcNav(true)
    return(
        <div className={Styles.home} >
              <div className={Styles.home_container}><Swippers/></div>
           
             
         
            
          
          
            
         
            
          
              
            
        </div>
    )
}