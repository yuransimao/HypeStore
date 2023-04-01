import {Login} from "../Login" 
import Teamamico from"../../../../ImgandVideo/Teamamico.svg"
import {Input} from "../../../Layout/Form/input"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {BsEnvelope} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../../../Backend/Service/firbase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Loader} from "../../../Loader/loader"
import {useNavigate} from "react-router-dom"
import { GoogleAuthProvider , signInWithPopup} from "firebase/auth";


export function SIGNIN ({funcNav}){
    funcNav ( false )

   
    const [email, SetEmail] =useState('')
    const [password, SetPassword] =useState('')
    const [isLoading, SetIsLoading] =useState(false)
    const navigation = useNavigate()

    const loginUser = (e) =>{
        e.preventDefault()
        SetIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    SetIsLoading(false)
    navigation('/')
    toast.success('Login Sucess')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(error.message)
    SetIsLoading(false)
  });
    }

    const provider = new GoogleAuthProvider();
    const handleclikButtonGoogle = async () =>{
       
signInWithPopup(auth, provider)
  .then((result) => {
    
    toast.success('Login Success')
    navigation('/')
  }).catch((error) => {
   toast.error('Conta não existente')
  });
    } 
    const handleclikButtonFB = async () =>{}
       

 return(
    <>

    <ToastContainer/>
    {isLoading && <Loader/>}
    <Login
    handleclikButtonGoogle={handleclikButtonGoogle}
    text1="Sign in with:"
    text2="Are you already registered ?"
    Span="Sign up"
    img={Teamamico}
    SubmitBtn={loginUser}
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
        Botao={
            <FormButton
            text="Sign in"
            />
            }
            to='/SIGNUP'
        />
        </>
 )
}