import {Navbar} from "./Navbar/Navbar"
import {SubMenu} from "./SubMenu/submenu"
import {Carshop} from "./CardShop/Carshop"
import { useState, } from "react"
import { UserMenu} from "./User/user"
export function Layout({carItem,addItems, addItemspruductRemove,trashClearproduct}){

    const [car, setcart] = useState(false)
    const [menu, setMenu] = useState(false)
    const [usermenu, setUserMenu] = useState(false)
    return(
        <>
        <Navbar setcart={setcart} car={car} 
        carItem={carItem} menu ={menu} 
        setMenu={setMenu} 
        setUsermenu={setUserMenu} 
        usermenu={usermenu}/>

        {car ? (<Carshop carItem={carItem}
            setcart={setcart} 
            addItems={addItems} 
            addItemspruductRemove={addItemspruductRemove}
            trashClearproduct={trashClearproduct }
            onClick={() => setcart(true)} />) : ""}
           {menu ? <SubMenu setMenu ={setMenu}/> : ""}
           {usermenu ? <UserMenu setUserMenu= {setUserMenu}/> : ""}

           
        </>
    )
}