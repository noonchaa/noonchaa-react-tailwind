import React, {useState} from 'react'
import {Login} from '../..'

export default {
    component: Login
}

export const login = (args) => {
    const [load, setLoad] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        setLoad(!load)
    }
    return(
        <Login
            {...args}
            forget={<a href='#'>Forget Password?</a>}
            register={<a href='#'>Don't have an account? Register</a>}
            loading={load}
            onSubmit={submit}
        />
    )
}