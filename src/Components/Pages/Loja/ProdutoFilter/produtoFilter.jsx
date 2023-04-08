import Styles from "./styles.module.scss"
export function ProdutoFilter (){
    return(
        <div className={Styles['ProdutoFilter']}>
            <h1>Price</h1>
            <div className={Styles['slider']}>
                <div className={Styles['progress']}></div>   
            </div>
            <div className={Styles['inputs-range']}>
                <input type="range" min={'0'} max={'10000'} />
                <input type="range"  min={'0'} max={'10000'}/>
            </div>
            <div className={Styles['inputs-Namber']}>
            <div className={Styles['Namber']}>
                <label>Min</label>
                    <input type="number" />
             </div>
            <div className={Styles['Namber']}>
            <label>Max</label>
                <input type="number" />
            </div>
            </div>
            
        </div>
    )
}