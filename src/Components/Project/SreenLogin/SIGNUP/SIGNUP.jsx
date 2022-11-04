import {Login} from "../Login" 
import Newemployeeamico from"../../../../ImgandVideo/Newemployeeamico.svg"
import {Input} from "../../../Layout/Form/input"
import {FormButton} from "../../../Layout/Form/FormButton/FormButton"
import {BsEnvelope} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"

export function SIGNUP ({funcNav}){
    funcNav ( false )
    return(
        <Login
        text1="Sign up with:"
        text2="Are you already registered ?"
        Span="Sign in"
        img={Newemployeeamico}

        input1 ={<Input
        text="text"
        placeholder="Name"
        icon={<AiOutlineUser/>}
        />}

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

        input4={
        <Input
        text="password"
        placeholder="Confirme a password"
        icon={<BiLockAlt/>}
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