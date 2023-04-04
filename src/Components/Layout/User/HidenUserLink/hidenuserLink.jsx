import {useSelector} from "react-redux"
import {selectIsloggedIn} from "../../../../Redux/Slice/Authslice"

export const showLogin = ({children}) =>{
    const isLoggedin = useSelector(selectIsloggedIn)
    if(isLoggedin){
        return children
    }
    return null
}