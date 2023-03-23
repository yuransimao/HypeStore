import iphone  from"../../../../../Iphones/iphone-11-pro-max.png"
import Styles from "./styles.module.scss"

export function CardR (props){
    return(
    <div className={Styles.Card_conteiner}>
        <div className={Styles.Card_text}>
            <h1>Iphone</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={Styles.Card_img}>
            <img src={iphone} alt={iphone} />
        </div>

        <div className={Styles.Card_button}>
            <button>Shop</button>
        </div>

    </div>
    )
}