import Styles from "./styles.module.scss"


export function Input({text, placeholder,icon, value, setInput}){
    return(
            <div className={Styles.Control}>
                <label className={Styles.LabelInput}>
                    
                    <div className={Styles.inputIcon}>{icon}</div>
                    <input type={text} placeholder={placeholder} value={value} onChange={(e) => setInput(e.target.value)}  />
                </label>
               
            </div>
       
    )
}