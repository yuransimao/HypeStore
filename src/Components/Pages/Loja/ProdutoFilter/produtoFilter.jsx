import Styles from "./styles.module.scss"
export function ProdutoFilter (){
    return(
        <div className={Styles['ProdutoFilter']}>
            <h1>Price</h1>
            <div className={Styles['slider']}>
                <div className={Styles['progress']}></div>   
            </div>
            <div className={Styles['inputs-range']}>
                <input type="range" name="" id="" />
                <input type="range" name="" id="" />
            </div>
            <div className={Styles['inputs-Namber']}>
                <input type="number" name="" id="" />
                <input type="number" name="" id="" />
            </div>
            
        </div>
    )
}