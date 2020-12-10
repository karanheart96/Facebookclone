import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./Reducer"

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error) => alert(error.message))

    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png" alt = ""/>
                <img src = "https://candeocreative.files.wordpress.com/2015/11/facebook-wordmark.png" alt = ""/>
            </div>
           <Button type="submit" onClick={signIn}>
               Sign In
               </Button> 
        </div>
    )
}

export default Login
