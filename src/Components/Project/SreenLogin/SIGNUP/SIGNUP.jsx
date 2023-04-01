import {Login} from "../Login" 
import Newemployeeamico from"../../../../ImgandVideo/Newemployeeamico.svg"
import {Input} from "../../../Layout/Form/input"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {BsEnvelope} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {useState} from 'react'

export function SIGNUP ({funcNav}){
    funcNav ( false )

    const [name, SetName] =useState('')
    const [email, SetEmail] =useState('')
    const [password, SetPassword] =useState('')
    const [confpassword, SetConfpassword] =useState('')
    
    const registerUser= (e) =>{
        e.preventDefault()
        console.log(name)
    }


    return(
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
    )
}