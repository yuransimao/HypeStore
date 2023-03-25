
import Styles from"./styles.module.scss"
import Swippers from"../../Layout/Slide/Swiper"
import {Slidet} from"../../Layout/Slide/SlideCard/slidet"
import {Grid} from"../../Layout/Grid/grid"
import {LinkButton} from"../../Layout/Button/button"






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

        <div className={Styles.home_conteiner}>
          <h1 className={Styles.Home_Subtitile}>Top Sellers <span>- Roll up, roll up!</span></h1>
        <Grid/>

        <div className={Styles.container_About}>
        <div className={Styles.about_text}>
          <h1>Nós somos os renovados(super) HypeStore.</h1>
          <div className={Styles.btn}>
            <LinkButton ClassBtn='Botao'txt='Read all About it'/>
          </div>

        </div>
        </div>

        </div>
        </div>

              
        </div>
    )
}