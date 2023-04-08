import { parse } from "nodemon/lib/cli"
import Styles from "./styles.module.scss"
import  {useState, useRef} from "react"

export function ProdutoFilter (){

    const [maxinpN , setMaxInputN] = useState()
    const [mininpN , setMinInputN] = useState()
    const [minOrang , setMinOrange] = useState(0)
    const [maxOrange , setMaxOrang] = useState(10000)
    const [maxOrangeMin , setMaxOrangMin] = useState()
    const [maxOrangeMax , setMaxOrangMax] = useState()
    const progress = useRef()
    
    

    const pricegap = 1000
    const handleValuemin = (e) => {
        setMinOrange(e.target.value) 
        setMaxOrangMin(e.target.max)
    }
    const handleValuemax = (e) => {
        setMaxOrang(e.target.value)
        setMaxOrangMax(e.target.max)

    }

    
    const HandleFilter = (e) =>{
       const conversioMaxOrange = parseInt(maxOrange)
       const conversiomaxOrangeMax = parseInt(maxOrangeMax)
       const conversiminOrang = parseInt(minOrang)
       const conversmaxOrangeMin = parseInt(maxOrangeMin)

       console.log(conversiminOrang)
       
        
        if(conversioMaxOrange - conversiminOrang  < pricegap){
            if(e.target.id == 'orangeMin'){
                setMinOrange( conversioMaxOrange - pricegap)
                console.log(conversioMaxOrange - pricegap)
                
            }else{
                setMaxOrang(conversiminOrang + pricegap)
                
            }
        }
        else{
            progress.current.style.left = (conversiminOrang / conversmaxOrangeMin) * 100 +"%"
            progress.current.style.right = 100 - (conversioMaxOrange /conversiomaxOrangeMax) * 100 +"%"
            
            
        }
    }

   
    return(
        <div className={Styles['ProdutoFilter']}>
            <h1>Price</h1>
            <div className={Styles['slider']}>
                <div className={Styles['progress']} ref={progress}></div>   
            </div>

            <div className={Styles['inputs-range']}>
                <input  id="orangeMin" type="range" min={'0'} max={'10000'} value={minOrang}
                 onChange={handleValuemin}
                 onClick ={HandleFilter} 
                />

                <input onClick ={HandleFilter}  type="range"  min={'0'} max={'10000'} value={maxOrange} onChange={handleValuemax}/>
            </div>

            <div className={Styles['inputs-Namber']}>
            <div className={Styles['Namber']}>
                <label>Min</label>
                    <input type="number"  value={minOrang} onChange={(e) => setMinInputN(e.target.value)}/>
             </div>
            <div className={Styles['Namber']}>
            <label>Max</label>
                <input type="number" value={maxOrange} onChange={(e) => setMaxInputN(e.target.value)} />
            </div>
            </div>
            
        </div>
    )
}