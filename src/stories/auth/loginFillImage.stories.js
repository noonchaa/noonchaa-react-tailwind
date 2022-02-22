import React, {useState} from "react";
import { DangerFull, LoginFillImage} from '../..'

export default {
    component: LoginFillImage
}

export const loginFillImage = () => {
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

    if(error) return <DangerFull onClick={()=>setError(!error)}>Password must contain uppercase, lowercase, number and symbol</DangerFull>
    return (
        <LoginFillImage
        bgUrl='https://source.unsplash.com/c-NEiPIxpYI'
        brand='NRT'
        lead='React component library with tailwindCSS'
        onSubmit={submit}
        forget={<a href='#'>Forget Password?</a>}
        register={<a href='#'>Register</a>}
        loading={load}
        />
    )
}