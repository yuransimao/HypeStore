import {Login} from "../Login" 
import {Loader} from "../../../Loader/loader"

import {auth} from '../../../../../Backend/Service/firbase'
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authentication from"../../../../ImgandVideo/Authentication.svg"
import {Input} from "../../../Layout/Form/input"
import {BsEnvelope} from "react-icons/bs"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {useState} from 'react'
export function Reset({funcNav}){
    funcNav(false)
    const [email, SetEmail] =useState('')
    const [isLoading, SetIsLoading] =useState(false)

    const resetUser = (e) => {
        e.preventDefault()
        SetIsLoading(true)
        sendPasswordResetEmail(auth, email)
  .then(() => {
   toast.success('Verifica o seu email')
   SetIsLoading(false)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetIsLoading(false)
    toast.error('Senha não Redifinida')
  });
    }

    return(
        <>
        <ToastContainer/>
        {isLoading && <Loader/>}
          <Login
          SubmitBtn={resetUser}
          img={Authentication}
          CustomClass='Screnlogin_FirstColum'
          CustomClas= 'Screnlogin_SecondColum'
          input2={
            <Input
            text="Email"
            placeholder="E-mail"
            icon={<BsEnvelope/>}
            value={email}
            setInput={SetEmail}
            />
            }
            Botao={
                <FormButton
                text="Sign up"
                />
                }
          />
  
        </>
    )
}