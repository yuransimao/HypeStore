import {Card} from "../Card/card"
import Styles from "./styles.module.scss"
import iphone12 from "../../../../Iphones/iphone-11-pro-max.png"

export function Grid(){
    return(
        <div className={Styles.grid}>

            <div className={Styles.grid_card1}>
            <Card
            name={'Yuran'}
            clasCard='cardGrid'
            img={iphone12}
            />
            </div>
            <div className={Styles.grid_card2}>
            <Card
            name={'Yuran'}
            clasCard='cardGrid'
            />
            </div>
            <div className={Styles.grid_card3}>
             <Card
            name={'Yuran'}
            clasCard='cardGrid'
            />
            </div>
            <div className={Styles.grid_card4}>
            <Card
            name={'Yuran'}
            clasCard='cardGrid'
            />
            </div>
            <div className={Styles.grid_card5}>
            <Card
            name={'Yuran'}
            clasCard='cardGrid'
            />
            </div>

        </div>
    )
}