import {Navbar} from "./Navbar/Navbar"
import {Carshop} from "./CardShop/Carshop"
import { useState, } from "react"

export function Layout({carItem,addItems, addItemspruductRemove,trashClearproduct}){

    const [car, setcart] = useState(false)
    return(
        <>
        <Navbar setcart={setcart} car={car} carItem={carItem}/>
        {car ? (<Carshop carItem={carItem} 
            addItems={addItems} 
            addItemspruductRemove={addItemspruductRemove}
            trashClearproduct={trashClearproduct }
            onClick={() => setcart(true)} />) : ""}

        </>
    )
}