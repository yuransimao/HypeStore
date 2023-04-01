import {Login} from "../Login" 
import Newemployeeamico from"../../../../ImgandVideo/Newemployeeamico.svg"
import {Input} from "../../../Layout/Form/input"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {BsEnvelope} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../../../../Backend/Service/firbase'

import {Loader} from "../../../Loader/loader"
import {useNavigate} from "react-router-dom"

export function SIGNUP ({funcNav}){
    funcNav ( false )

    const [name, SetName] =useState('')
    const [email, SetEmail] =useState('')
    const [password, SetPassword] =useState('')
    const [confpassword, SetConfpassword] =useState('')
    const [isLoading, SetIsLoading] =useState(false)
    const navigation = useNavigate()
    
    const registerUser= (e) =>{
        e.preventDefault()
        if (name == ''){
            toast.error("Prencha o Campo Name")

        }
       
        
        if(password == ''){
            toast.error("Prencha o Campo Password")
        }
        
        else if(confpassword !== password ){
            toast.error("Verifica a pass Word")
        }
        else if(password.length < 8){
            toast.error("Password fraca")
        }

        if(email == ''){
            toast.error("Prencha o Campo Email")
        }

        else if(email.indexOf('@')== -1 || email.indexOf('.')==-1 || (email.indexOf('@') - email.indexOf('.')==1)){
            toast.error("Verifica o campo Email, Ex: 'hypeStore7@gmail.com' ")

        }
        SetIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    SetIsLoading(false)
    toast.success('Registado com sucesso')
    navigation('/')
  })
  .catch((error) => {
    SetIsLoading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(error.message)
    
    
  });

  

    }


    return(
        <>

        <ToastContainer/>
        {isLoading && <Loader/>}
        <Login
        text1="Sign up with:"
        text2="Are you already registered ?"
        Span="Sign in"
        img={Newemployeeamico}
        SubmitBtn={registerUser}
        input1 ={
        <Input
        text="text"
        placeholder="Name"
        icon={<AiOutlineUser/>}
        value={name}
        setInput={SetName}
        />}

        input2={
        <Input
        text="Email"
        placeholder="E-mail"
        icon={<BsEnvelope/>}
        value={email}
        setInput={SetEmail}
        />
        }

        input3={<Input
        text="Password"
        placeholder="Password"
        icon={<BiLockAlt/>}
        value={password}
        setInput={SetPassword}
            />}

        input4={
        <Input
        text="password"
        placeholder="Confirme a password"
        icon={<BiLockAlt/>}
        value={confpassword}
        setInput={SetConfpassword}
        />
        }
        Botao={
        <FormButton
        text="Sign up"
        />
        }
        to='/SIGNIN'
        />
        </>
    )
}