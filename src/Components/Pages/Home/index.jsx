
import Styles from"./styles.module.scss"
import Swippers from"../../Layout/Slide/Swiper"
import {Slidet} from"../../Layout/Slide/SlideCard/slidet"
import {Grid} from"../../Layout/Grid/grid"
import {LinkButton} from"../../Layout/Button/button"
import {Seta,Soriso, Sacola,Impack} from"../../Layout/Icons/icons"






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

        <div className={Styles.container_About_icon}> 
         <ul>

          <div className={Styles.Item}>
            <li>
              {Seta}
              <div ClassName={Styles.Item_text}>
              <span>Best offer on the market</span> <p>
              The best price and quality selected for you.
            </p>
            </div>

            </li>

            <li>
              {Soriso}
              <div >
              <span >Quality guaranteed</span>
              <p>Ensuring our sellers maintain our high standards.</p>
              </div>
            </li>
          </div>

          <div className={Styles.Item1}>
            <li>
              {Sacola}
              <div>
              <span >Proper Service</span>
              <p>A shopping experience that meets your expectations.</p>
              </div>
              </li>
              <li >
                {Impack}
              <div>
              <span >Real impact</span>
              <p>Addressing a very real problem.</p>
              </div>
              </li>
          </div>
         </ul>
        </div>

        </div>

        </div>
        </div>

              
        </div>
    )
}