import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "../Components/Pages/Home"
import {Contact} from "../Components/Pages/Contact"
import {Smartphones} from "../Components/Pages/smartphones/smartphones"
import {Iphone} from "../Components/Pages/Iphone/iphone"
import {Help} from "../Components/Pages/Help/Help"
import {Aboult} from "../Components/Pages/Aboult/About"
import {SIGNUP} from "../Components/Project/SreenLogin/SIGNUP/SIGNUP"
import {SIGNIN} from "../Components/Project/SreenLogin/SIGNIN/SIGNIN"
import {Reset} from "../Components/Project/SreenLogin/Reset/reset"
import {Container} from "../Components/Layout/Container/Container"
import {Layout} from "../Components/Layout/Layout"
import { Footer } from "../Components/Layout/Footer/footer"
import { useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
     <ToastContainer/>
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
            <Route  path="/Smartphones" element={<Smartphones funcNav = {setShowNav}/>}/>
            <Route  path="/Iphone" element={<Iphone funcNav = {setShowNav}/>}/>
            <Route  path="/Help" element={<Help funcNav = {setShowNav}/>}/>
            <Route path="/Aboult" element={<Aboult funcNav = {setShowNav}/>}/>
        <Route  path="/SIGNUP" element={<SIGNUP funcNav = {setShowNav}/>}/>
        <Route  path="/SIGNIN" element={<SIGNIN funcNav = {setShowNav}/>}/>
        <Route  path="/Reset" element={<Reset funcNav = {setShowNav}/>}/>
           
        </Routes>
      </Container>
      {showNav &&<Footer/>}
      
    </BrowserRouter>
    </>
 
)


    
    
}