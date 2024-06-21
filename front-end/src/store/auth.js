import { createContext, useEffect, useState} from "react";
import { useContext } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const [service,setServices] = useState([])
    const authorizationToken = `Bearer${token}`

    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedIn = !!token
    console.log("isLoggedIn",isLoggedIn)


    // tackle the logout functionality
    const LogoutUser = () =>{
        setToken("")
        return localStorage.removeItem('token')
    }




    // jwt authentication - to get the currently LoggedIn data

    const userAuthentication = async()=>{
        try {
            setIsLoading(true)
            const responce = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            })
            if(responce.ok){
                const data = await responce.json()
                console.log('user data',data.userData)
                setUser(data.userData)
                setIsLoading(false)
            }
            else{
                console.log("error fetching data")
                setIsLoading()
            }
        } catch (error) {
            console.log("error fetching data")
        }
    }
        //     to fecth services data from the database
        const getServices = async()=>{
            try {
                const responce = await fetch("http://localhost:5000/api/Services",{
                    method:"GET",
                })
                if(responce.ok){
                    const data = await responce.json()
                    console.log(data.msg)
                    setServices(data.msg)
                }
            } catch (error) {
                console.log(`services frontend error${error}`)
            }
        }

    useEffect( ()=>{
        getServices()
        userAuthentication()
     },[])

    return (
    <AuthContext.Provider value={{ isLoggedIn,storeTokenInLS,LogoutUser,user,service,authorizationToken,isLoading }}>
        {children}
    </AuthContext.Provider>
    )
}

// devlivery boy
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};

