import {Login} from "../Login" 
import Teamamico from"../../../../ImgandVideo/Teamamico.svg"
import {Input} from "../../../Layout/Form/input"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {BsEnvelope} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import Styles from "../styles.module.scss"


export function SIGNIN ({funcNav}){
    funcNav ( false )
 return(
    <>
    <Login
    text1="Sign in with:"
    text2="Are you already registered ?"
    Span="Sign up"
    img={Teamamico}

    input2={
    <Input
    text="Email"
    placeholder="E-mail"
    icon={<BsEnvelope/>}
    />
    }

    input3={<Input
    text="Password"
    placeholder="Password"
    icon={<BiLockAlt/>}
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