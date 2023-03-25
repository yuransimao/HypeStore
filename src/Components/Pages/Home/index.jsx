
import Styles from"./styles.module.scss"
import Swippers from"../../Layout/Slide/Swiper"
import {Slidet} from"../../Layout/Slide/SlideCard/slidet"
import {Grid} from"../../Layout/Grid/grid"






export function Home ({funcNav}){
  

    funcNav(true)
    return(
        <div className={Styles.home} >
              <div className={Styles.home_Swippers}>
                <Swippers/>
                
                </div>
                
              <div className={Styles.home_Card}>
              <h1 className={Styles.Home_titile}>Hotter than the hottest potato <span>Or “potatoe”</span></h1>

              <div className={Styles['home-card']}>
           <Slidet/>
        </div>

        <div className={Styles.grid}>
          <h1>Look</h1>
        <Grid/>
        </div>
        </div>

              
        </div>
    )
}