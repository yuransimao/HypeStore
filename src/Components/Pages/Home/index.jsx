import {Link} from "react-router-dom"
import Styles from"./styles.module.scss"
import Swippers from"../../Layout/Slide/Swiper"
import {Slidet} from"../../Layout/Slide/SlideCard/slidet"
import {Grid} from"../../Layout/Grid/grid"
import {Title} from"../../Layout/Title/title"
import {LinkButton} from"../../Layout/Button/button"
import {Seta,Soriso, Sacola,Impack} from"../../Layout/Icons/icons"
import Cash from"../../../ImgandVideo/Cash.svg"




export function Home ({funcNav}){
  

    funcNav(true)
    return(
        <div className={Styles.home} >
              <div className={Styles.home_Swippers}>
                <Swippers/>
                
                </div>
                
              <div className={Styles.home_Card}>
              <Title text='Hotter than the hottest potato' subtext="Or 'potatoe' " classTitle='titile'/>

              <div className={Styles['home-card']}>
           <Slidet/>
        </div>

        <div className={Styles.home_conteiner}>
        <Title text='Top Sellers' subtext="-Roll up, roll up! " classTitle='Subtitile'/>
          
        <Grid/>

        <div className={Styles.container_About}>

        <div className={Styles.about_text}>
        <Title datatext='Nós somos os renovados (Super Mercado) HypeStore.' 
        text='Nós somos os renovados (Super Mercado) HypeStore.' 
        classTitle='TitleAbout'/>
          
          <div className={Styles.btn}>
            <LinkButton ClassBtn='Botao'txt='Read all About it'/>
          </div>

          <div className={Styles.about_img}>
              <img src={Cash} alt='cash'/>
          </div>

        </div>

        <div className={Styles.container_About_icon}> 
         <ul>

          <div className={Styles.Items}>
            <li>
              {Seta}
              <div className={Styles.Item_text}>
              <span>Best offer on the market</span> <p>
              The best price and quality selected for you.
            </p>
            </div>

            </li>

            <li>
              {Sacola}
              <div  className={Styles.Item_text}>
              <span >Proper Service</span>
              <p>A shopping experience that meets your expectations.</p>
              </div>
              </li>
          </div>

          <div className={Styles.Items1}>
          <li>
              {Soriso}
              <div  className={Styles.Item_text}>
              <span >Quality guaranteed</span>
              <p>Ensuring our sellers maintain our high standards.</p>
              </div>
            </li>

              <li >
                {Impack}
              <div  className={Styles.Item_text}>
              <span >Real impact</span>
              <p>Addressing a very real problem.</p>
              </div>
              </li>
          </div>
         </ul>
        </div>

        </div>

        <div className={Styles.about_link}>
          <Link>LEARN MORE ABOUT US</Link>
        </div>
        <Title text='Especially for you' subtext="-Especially for you" classTitle='Subtitile'/>
        </div>
        
        <div className={Styles['home-card']}>
           <Slidet/>
        </div>

        <div className={Styles['Card-text']}>
        <Title text='Dear Apple, Samsung, LG and Co.,'  classTitle='Subtitile'/>
        <p>We adore your products,<br/>but we like them more when they're refurbished. <br/>It's more romantic, less wasteful,<br/>and quite frankly - it's just so much cheaper.<br/><br/>Kisses,<br/> Quentin, Thibaud and Vianney <br/> Hype Store Founders
        </p>
        </div>
          <div className={Styles.home_conteiner}>
          <Title text='Other categories' subtext="- Nothing lost, everything gained, and all refurbished.! " classTitle='Subtitile'/>
          
          <Grid/>

          </div>
        
        
        </div>

              
        </div>
    )
}