import React, { useState } from "react";
import PropTypes from 'prop-types'

const loadingSvg = <svg width="40" height="24" className="mx-auto" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                begin="0s" dur="0.8s"
                                values="15;9;15" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                                begin="0s" dur="0.8s"
                                values="1;.5;1" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                        <animate attributeName="r" from="9" to="9"
                                begin="0s" dur="0.8s"
                                values="9;15;9" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                                begin="0s" dur="0.8s"
                                values=".5;1;.5" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                begin="0s" dur="0.8s"
                                values="15;9;15" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                                begin="0s" dur="0.8s"
                                values="1;.5;1" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    </svg>

const LoginFillImage = ({brand, lead, text, onSubmit, forget, register, loading, bgUrl}) => {
    const [view, setView] = useState(false)
    const [emailVer, setEmailVer] = useState(true)
    const [passVer, setPasVer] = useState(true)
    const [lowerCase, setLowerCase] = useState(true)
    const [uppercase, setUppercase] = useState(true)
    const [num, setNum] = useState(true)
    const [sym, setSym] = useState(true)
    const [long, setLong] = useState(true)

    const emailVerification = (e) => {
        const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        format.test(e.target.value)?setEmailVer(true):setEmailVer(false)
    }
    const passwordVerification = (e) => {
        const format = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        format.test(e.target.value)?setPasVer(true):setPasVer(false)
        const lower = /(?=.*?[a-z])/
        lower.test(e.target.value)?setLowerCase(true):setLowerCase(false)
        const upper = /(?=.*?[A-Z])/
        upper.test(e.target.value)?setUppercase(true):setUppercase(false)
        const numb = /(?=.*?[0-9])/
        numb.test(e.target.value)?setNum(true):setNum(false)
        const symbol = /(?=.*?[#?!@$%^&*-])/
        symbol.test(e.target.value)?setSym(true):setSym(false)
        e.target.value.length >= 8 ? setLong(true):setLong(false)
    }

    return(
        <div data-testid='fillImage' className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage:`url(${bgUrl})`}}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">{brand}</h2>
                            
                            <p className="max-w-xl mt-3 text-gray-300">{lead}</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">{brand}</h2>
                            
                            <p className="mt-3 text-gray-500 dark:text-gray-300">{text}</p>
                        </div>
    
                        <div className="mt-8">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input data-testid='email' type="email" name="email" id="email" placeholder="example@example.com" className={`block w-full px-4 py-2 mt-2 ${emailVer?'text-gray-700 dark:text-gray-300':'text-red-600'} placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} onBlur={(e)=>emailVerification(e)} required />
                                </div>
    
                                <div className="mt-6 relative">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <div className="text-xs text-gray-500 dark:text-gray-300 hover:underline cursor-pointer">{forget}</div>
                                    </div>
    
                                    <input data-testid='password' type={view?'text':'password'} name="password" id="password" placeholder="Your Password" className={`block w-full px-4 py-2 mt-2 ${passVer?'text-gray-700 dark:text-gray-300':'text-red-600'} placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} onBlur={(e)=>passwordVerification(e)} required />

                                    <span data-testid='view' className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer" onClick={()=>setView(!view)}>
                                        {view?
                                        <svg data-testid='open-eye' xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        :
                                        <svg data-testid='close-eye' xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                        }
                                    </span>
                                </div>
                                {!long && <p className="text-xs text-red-600 ml-4 mt-1">Password must be have at least 8 characters long</p>}
                                {!lowerCase && <p className="text-xs text-red-600 ml-4 mt-1">Password must be have at least 1 lowercase character</p>}
                                {!uppercase && <p className="text-xs text-red-600 ml-4 mt-1">Password must be have at least 1 uppercase character</p>}
                                {!num && <p className="text-xs text-red-600 ml-4 mt-1">Password must be have at least 1 number</p>}
                                {!sym && <p className="text-xs text-red-600 ml-4 mt-1">Password must be have at least 1 of {`(# ? ! @ $ % ^ & * -)`}</p>}
    
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:cursor-not-allowed" disabled={emailVer && passVer?false:true}>
                                    {loading?
                                    loadingSvg
                                    :
                                    'Login'}
                                    </button>
                                </div>
    
                            </form>
    
                            <div className="mt-6 text-sm text-center text-gray-400 cursor-pointer">{register}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
LoginFillImage.propTypes = {
    bgUrl: PropTypes.string,
    brand: PropTypes.string,
    lead: PropTypes.string,
    text: PropTypes.string,
    forget: PropTypes.element,
    register: PropTypes.element,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool
}
LoginFillImage.defaultProps = {
    brand: 'NRT',
    lead: 'React component library with tailwindCSS',
    text: 'Sign in to access your account',
    bgUrl: 'https://source.unsplash.com/3IR3fozccY8',
    forget: <p>Forget Password?</p>,
    register: <p>Don't have an account? Register</p>
}

export default LoginFillImage