import React, {useState} from "react";
import { DangerFull, LoginSideImage} from '../..'

export default {
    component: LoginSideImage
}

export const loginSideImage = () => {
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const passReg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    const submit = (e) => {
        e.preventDefault()
        setLoad(true)
        if(passReg.test(e.target.password.value)){
            // your submit code here
            console.log(e.target.password.value,'pass')
            setLoad(false)
        } else {
            // this is error handling
            setError(true)
            setLoad(false)
        }
    }
    const withGoogle = () => {
        // write your function to login with google
        console.log('with google')
    }

    if(error) return <DangerFull onClick={()=>setError(!error)}>Password must contain uppercase, lowercase, number and symbol</DangerFull>
    return (
        <LoginSideImage
        bgUrl='https://source.unsplash.com/c-NEiPIxpYI'
        brand='NRT'
        onSubmit={submit}
        forget={<a href='#'>Forget Password?</a>}
        register={<a href='#'>Register</a>}
        loading={load}
        google={()=>withGoogle()}
        />
    )
}