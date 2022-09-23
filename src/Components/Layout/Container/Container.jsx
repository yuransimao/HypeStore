import styles from"./Styles.module.scss"
 
 export function Container (props){
  return(
    <div className={`${styles.container} ${"styles"[props.customClasss]}`}>
        {props.children}
    </div>
  )
}