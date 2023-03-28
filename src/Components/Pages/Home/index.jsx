import {Link} from "react-router-dom"
import Styles from"./styles.module.scss"
import Swippers from"../../Layout/Slide/Swiper"
import {Slidet} from"../../Layout/Slide/SlideCard/slidet"
import {Grid} from"../../Layout/Grid/grid"
import {Title} from"../../Layout/Title/title"
import {LinkButton} from"../../Layout/Button/button"
import {Lista} from"../../Layout/Lista/lista"
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
           <div className={Styles.container_Lista}>
             <Lista
             CustomClass='Lista_principal'
             text={'Best Sellers'}
             text1={'Best Sellers'}
             text2={'Good Deals'}
             text3={'Best Sellers'}
             
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Smartphones'}
             text1={'Phone'}
             text2={'Samsung'}
             text3={'5G Phones'}
             text4={'Fairphone'}
             text5={'Huawei'}
             text6={'Sony'}
             text7={'Google'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'MacBook'}
             text1={'All MacBook'}
             text2={'MacBook Pro'}
             text3={'MacBook Air'}
             text4={'MacBook'}
             text5={'MacBook Accessories'}
             text6={'Sony'}
            
             />
             <Lista
             CustomClass='Lista_principal'
             text={'iPad & Tablets'}
             text1={'iPad'}
             text2={'iPad Pro'}
             text3={'iPad Air'}
             text4={'iPad accessories'}
             text5={'iPad Mini'}
             text6={'Galaxy Tab'}
             text7={'Huawei'}
             text8={'Lenovo'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Computers & Laptops'}
             text1={'Laptop'}
             text2={'Chromebook'}
             text3={'Desktop Computers'}
             text4={'2 in 1 hybrid PC'}
             text5={'Computer accessories'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Apple Watch'}
             text1={'All products'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Audio'}
             text1={'Headphones & Earphones'}
             text2={'Micro Hi-Fi System'}
             text3={'Dock & Docking Station'}
             text4={'Speakers'}
             text5={'MP3 & MP4 Player'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Accessories'}
             text1={'Smartphones accessories'}
             text2={'Computer accessories'}
             text3={'Console accessories'}
             
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Manufacturer Renewed'}
             text1={'Renewed by Razer'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Smart Watches'}
             text1={'Apple Watch'}
             text2={'Samsung Watch'}
             text3={'Fitbit Smart Watch'}
            
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Apple Corner'}
             text1={'iPhone'}
             text2={'iPad'}
             text3={'Mac'}
             text4={'Apple Watch'}
             text5={'iPod'}
             text6={'Other Apple products'}
             text7={'Huawei'}
             text8={'Lenovo'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Game Consoles'}
             text1={'Nintendo'}
             text2={'PlayStation'}
             text3={'Xbox'}
             text4={'Games & Accessories'}
             
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Transportation'}
             text2={'Electric scooters'}
             text3={'Hoverboards'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Home Office Shop'}
             text2={'MacBook'}
             text3={'Laptop'}
             text4={'Desktop Computers'}
             text5={'Tablets'}
             text6={'Computer accessories'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Student Discount'}
             text2={'Student Discount'}

             />
             <Lista
             CustomClass='Lista_principal'
             text={'Small Appliances'}
             text2={'Food Processors'}
             text3={'Coffee Machines'}
             text4={'Cookers'}
             text5={'Blenders & Juicers'}
             text6={'Computer accessories'}
             text7={'Huawei'}
             text8={'Lenovo'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Cameras & Camcorders'}
             text2={'Cameras'}
             text3={'Video Cameras & Camcorders'}
             
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Home Care Appliances'}
             text2={'Vacuum Cleaners'}
             text3={'Irons'}
             text4={'Fan and Air conditioners'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Drones'}
             text2={'Drones'}
             
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Buying Guides'}
             text2={'Smartphones'}
             text3={'Audio'}
             text4={'Console & Gaming'}
             text5={'Home Appliance'}
             text6={'Laptops'}
             text7={'Events'}
             text8={'Black Friday'}
             />
             <Lista
             CustomClass='Lista_principal'
             text={'Phone comparison'}
             text2={'All phone comparisons'}
             />

           </div>
          </div>
        
        
        </div>

              
        </div>
    )
}