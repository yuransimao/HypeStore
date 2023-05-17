
import Styles from "./styles.module.scss"
import  {useState, useRef , useEffect} from "react"

export function ProdutoFilter (){
    // Input type number
    const ValorMax = 10000
    const [maxinpN , setMaxInputN] = useState(ValorMax)
    const [mininpN , setMinInputN] = useState(0)

    // Input do type Range
    const [minRange , setMinRange] = useState(0)
    const [maxRange , setMaxRange] = useState(ValorMax)

    //valores maximos e minimo do inputRange 
    const [maxRangeMin , setMaxRangeMin] = useState()
    const [maxRangeMax , setMaxRangeMax] = useState()

    const [active , setActive] = useState(false)
    const [activeN , setActiveN] = useState(false)
    const progress = useRef(null)
    
    

    const pricegap = 1000;

    const handleValuemin = (e) => {
        setMinRange(e.target.value) 
        
        setMaxRangeMin(e.target.max)
    }
    
    const handleValuemax = (e) => {
        setMaxRange(e.target.value)
        setMaxRangeMax(e.target.max)

    }

    
    const HandleFilter = (e) =>{
       const conversioMaxRange = parseInt(maxRange)
       const conversiomaxRangeMax = parseInt(maxRangeMax)
       const conversiminRange = parseInt(minRange)
       const conversmaxRangeMin = parseInt(maxRangeMin)

       
       setActive(true)
       setActiveN(false)
        
        if(conversioMaxRange - conversiminRange  < pricegap){
            if(e.target.id == 'RangeMin'){
                setMinRange( conversioMaxRange - pricegap)
                
                
            }else{
                setMaxRange(conversiminRange + pricegap)
                
            }
        }
        else{
            progress.current.style.left = (conversiminRange / conversmaxRangeMin) * 100 +"%"
            progress.current.style.right = 100 - (conversioMaxRange /conversiomaxRangeMax) * 100 +"%"
            
            
        }
    }

   


     const HandleFilterN = (e) =>{
        setActive(false)
        setActiveN(true)
        
       const conversiomaxRangeMax = parseInt(maxRangeMax)
       const conversioMaxRange = parseInt(maxRange)
       const conversmaxRangeMin = parseInt(maxRangeMin)
       const conversiminRange = parseInt(minRange)
       const conversmininpN = parseInt(mininpN)
       const convermaxinpN = parseInt(maxinpN)

           if((convermaxinpN - conversmininpN  >= pricegap)&& convermaxinpN <= 10000){
            if (e.target.id == 'NumberMin'){
                setMinRange (conversmininpN)
                progress.current.style.left = (conversmininpN / conversmaxRangeMin) * 100 +"%"
            }
            else{
                setMaxRange(convermaxinpN)
                console.log(100 - (convermaxinpN / conversiomaxRangeMax) * 100 )
                progress.current.style.right = 100 - (convermaxinpN / conversiomaxRangeMax) * 100 +"%"
               }
           }
           


     }

    
   
    return(
        <div className={Styles['ProdutoFilter']}>
            <h1>Price</h1>
            <div className={Styles['slider']}>
                <div className={Styles['progress']} ref={progress}></div>   
            </div>

            <div className={Styles['inputs-range']}>
                <input  id="RangeMin" type="range" min={'0'} max={'10000'} value={activeN ?  mininpN : minRange}
                 onChange={handleValuemin}
                 onClick ={HandleFilter} 
                 steps='100'
                />

                <input onClick ={HandleFilter}  type="range"  min={'0'} max={'10000'} 
                value={activeN ?  maxinpN : maxRange} onChange={handleValuemax}
                steps='100'
                />
            </div>

            <div className={Styles['inputs-Namber']}>

            <div className={Styles['Namber']}>
                <label>Min</label>
                    <input type="number" id="NumberMin" value={ active ? minRange : mininpN} onClick={HandleFilterN} onChange={(e) => setMinInputN(e.target.value)}/>
             </div>

            <div className={Styles['Namber']}>
            <label>Max</label>
                <input type="number" value={ active ? maxRange : maxinpN} onClick={HandleFilterN} onChange={(e) => setMaxInputN(e.target.value)} />
            </div>
            </div>
            
        </div>
    )
}