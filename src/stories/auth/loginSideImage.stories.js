import React, {useState} from "react";
import { LoginSideImage} from '../..'

export default {
    component: LoginSideImage
}

export const loginSideImage = (args) => {
    const [load, setLoad] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        setLoad(!load)
    }
    const withGoogle = () => {
        // write your function to login with google
        alert('Write your function to login with google')
    }

    return (
        <LoginSideImage
        {...args}
        onSubmit={submit}
        forget= {<p>Forget Password?</p>}
        register= {<p>or sign up</p>}
        loading={load}
        google={()=>withGoogle()}
        />
    )
}