import Styles from"./navbar.module.scss"
import {ImCross} from "react-icons/im"
import {BsTrashFill} from "react-icons/bs"


export function Carshop({carItem,addItemspruductRemove,trashClearproduct }){
    const shop =carItem

    const totalPrice = shop.reduce((price, item) => price + item.quantity * item.Price,0)
    return(

        <div className={Styles.Carshop}>
        <div className={Styles.Carshop_totalPrice}>Total Price:<span>{totalPrice}</span></div>
        <div className={Styles.Carshop_Trash}> {shop.length >=1 && (<button onClick={trashClearproduct}><BsTrashFill/></button>
        )}</div>

        {shop.length === 0 && ( <span className={Styles.Carshop_offline}>No items in the cartshop</span>)}
         <div className={Styles.carItem} >
        {shop.map((item)=>(
        <div key={item.id} className={Styles.carItems}>
        <div className={Styles.carShopitem_img}>
        <img width='30' src={item.img} alt={item.name}/>
        </div>
        
        <div className={Styles.carShopitem_name}>
        {item.name}
        </div> 

         <div className={Styles.carShopitem_price}>
        $  <span>{item.quantity * item.Price}</span> Kz
        </div>

        <div className={Styles.carShopitem_button} >
            <button className={Styles.carShopitem_button_addItemspruduct}  onClick={() => addItemspruduct(item)}>
                
                </button>

            <button onClick={() => addItemspruductRemove(item)}><ImCross/></button>
        </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}