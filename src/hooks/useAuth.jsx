import { useContext } from "react"
import { contextProvider } from "../Authprovider"

const useAuth = ()=>{
    const auth = useContext(contextProvider);
    return auth;
}

export default useAuth;