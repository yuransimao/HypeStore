import Styles from "./styles.module.scss"
import Storet from "../../assets/StoreT.gif"
import ReactDOM from 'react-dom'
import React from "react"
export const Loader =()=>{
    return ReactDOM.createPortal(
    <div className={Styles.wrapper}>
        <div className={Styles.loader}>
            <img src={Storet} alt='loading...'/>
        </div>
    </div>,
    document.getElementById('loader')
    )
}