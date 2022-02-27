import React, {useState} from "react";
import { LoginFillImage} from '../..'

export default {
    component: LoginFillImage
}

export const loginFillImage = (args) => {
    const [load, setLoad] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        setLoad(!load)
    }
    return (
        <LoginFillImage
        {...args}
        forget= {<p>Forget Password?</p>}
        register= {<p>Don't have an account? Register</p>}
        loading={load}
        onSubmit={submit}
        />
    )
}