
import Styles from"./styles.module.scss"

import Swippers from"../../Layout/Slide/Swiper"
import {Slidet} from"../../Layout/Slide/SlideCard/slidet"






export function Home ({funcNav}){
  

    funcNav(true)
    return(
        <div className={Styles.home} >
              <div className={Styles.home_Swippers}>
                <Swippers/>
                
                </div>
                
              <div className={Styles.home_Card}>
              <h1>Hotter than the hottest potato</h1>

              <div className={Styles['home-card']}>
           <Slidet/>
        </div>
              </div>
        </div>
    )
}