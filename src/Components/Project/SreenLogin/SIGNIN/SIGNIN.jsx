import {Login} from "../Login" 
import Teamamico from"../../../../ImgandVideo/Teamamico.svg"
import {Input} from "../../../Layout/Form/input"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {BsEnvelope} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {useState} from 'react'


export function SIGNIN ({funcNav}){
    funcNav ( false )

    const [name, SetName] =useState('')
    const [email, SetEmail] =useState('')
    const [password, SetPassword] =useState('')
 return(
    <>
    <Login
    text1="Sign in with:"
    text2="Are you already registered ?"
    Span="Sign up"
    img={Teamamico}
    value={name}
    setInput={SetName}
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