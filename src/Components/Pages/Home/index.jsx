
import Styles from"./styles.module.scss"

import {Slide} from"../../Layout/Slide/Swiper"













export function Home ({funcNav}){
   

    funcNav(true)
    return(
        <div className={Styles.home} >
 
              <>
              <Slide/>
           
              </>
         
            
          
          
            
         
            
          
              
            
        </div>
    )
}