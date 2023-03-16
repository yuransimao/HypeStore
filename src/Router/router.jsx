import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "../Components/Pages/Home"
import {Contact} from "../Components/Pages/Contact"
import {Loja} from "../Components/Pages/Loja/Loja"
import {Help} from "../Components/Pages/Help/Help"
import {Aboult} from "../Components/Pages/Aboult/About"
import {SIGNUP} from "../Components/Project/SreenLogin/SIGNUP/SIGNUP"
import {SIGNIN} from "../Components/Project/SreenLogin/SIGNIN/SIGNIN"
import {Container} from "../Components/Layout/Container/Container"
import {Layout} from "../Components/Layout/Layout"
import { useState} from "react"


export default function Routers(){

    const [carItem, setcarItem] = useState([])
  const [showNav, setShowNav] =useState(true) 
  
  
    

    const addItems = (product) =>{
      const ProductExit = carItem.find((items) => items.id === product.id)
      if(ProductExit){
        setcarItem(carItem.map((items) =>(
              items.id === product.id ?{...ProductExit, quantity: ProductExit.quantity +1 } :items
          )))
      }
      else{
        setcarItem([...carItem,{...product, quantity: 1}]) 
      }
  }

  const addItemspruductRemove = (product)=>{
    const ProductExit = carItem.find((items) => items.id === product.id)
      if(ProductExit.quantity ===1){
        setcarItem(carItem.filter((items) =>( items.id !== product.id)))
      }
      else{
        setcarItem(carItem.map((items) =>(
          items.id === product.id ? {...ProductExit, quantity: ProductExit.quantity -1 } :items
      )) )
      }

  }
 const trashClearproduct = ( )=>{
  setcarItem([]);
 }
    return(
    <>
     <BrowserRouter>
     
     {showNav &&
      <Layout 
      addItems={addItems} 
      carItem={carItem}
      addItemspruductRemove={addItemspruductRemove}
      trashClearproduct ={trashClearproduct }

      />
     }
      
      
      <Container customClass="minheight">
        <Routes>
        
            <Route exact path="/" element={
            <Home 
            addItems={addItems}
            carItem={carItem}
            funcNav = {setShowNav}
          
            />}/>
            <Route  path="/Contact" element={<Contact funcNav = {setShowNav}/>}/>
            <Route  path="/Loja" element={
            <Loja 
              addItems={addItems}
              carItem={carItem}
            funcNav = {setShowNav}/>}/>
            <Route  path="/Help" element={<Help funcNav = {setShowNav}/>}/>
            <Route path="/Aboult" element={<Aboult funcNav = {setShowNav}/>}/>
        <Route  path="/SIGNUP" element={<SIGNUP funcNav = {setShowNav}/>}/>
        <Route  path="/SIGNIN" element={<SIGNIN funcNav = {setShowNav}/>}/>
           
        </Routes>
      </Container>
      
    </BrowserRouter>
    </>
 
)


    
    
}