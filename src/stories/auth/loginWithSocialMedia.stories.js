import React, {useState} from "react";
import {LoginWithSosMed} from '../..'

export default {
    component: LoginWithSosMed
}

export const loginWithSocialMedia = (args) => {
    const [load, setLoad] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        setLoad(!load)
    }
    const withGoogle = () => {
        // write your function to login with google
        alert('Write your function to login with google')
    }
    const withTwitter = () => {
        // write your function to login with twitter
        alert('Write your function to login with twitter')
    }

    return (
        <LoginWithSosMed
        {...args}
        onSubmit={submit}
        forget= {<p>Forget Password?</p>}
        register= {<p>or sign up</p>}
        loading={load}
        google={()=>withGoogle()}
        twitter={()=>withTwitter()}
        addMedia1={
            <button className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200" onClick={()=>alert('custom media one')}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </button>
        }
        />
    )
}