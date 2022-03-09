import React, { useState } from "react";
import PropTypes from 'prop-types'

const loadingSvg = <svg width="40" height="20" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
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

const Login = ({brand, onSubmit, forget, register, loading, lead, text}) => {
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

    return (
        <div data-testid='login' className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">{brand}</h2>

                <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">{lead}</h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">{text}</p>

                <form onSubmit={onSubmit}>
                    <div className="w-full mt-4">
                        <input data-testid='email' className={`block w-full px-4 py-2 mt-2 ${emailVer?'text-gray-700 dark:text-gray-300':'text-red-600'} placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300`} onBlur={(e)=>emailVerification(e)} id='email' type="email" placeholder="Email Address" aria-label="Email Address" required />
                    </div>

                    <div className="w-full mt-4 relative">
                        <input data-testid='password' className={`block w-full px-4 py-2 mt-2 ${passVer?'text-gray-700 dark:text-gray-300':'text-red-600'} placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300`} onBlur={(e)=>passwordVerification(e)} id="password" type={view?'text':'password'} placeholder="Password" aria-label="Password" required/>
                        
                        <span data-testid='view' className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={()=>setView(!view)}>
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

                    <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500 cursor-pointer">{forget}</div>

                        <button className="px-4 py-2 leading-5 text-white disabled:cursor-not-allowed transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type='submit' disabled={emailVer && passVer?false:true}>
                            {loading?
                            loadingSvg
                            :
                            'Login'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-200 cursor-pointer">
                    {register}
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    brand: PropTypes.string,
    lead: PropTypes.string,
    text: PropTypes.string,
    forget: PropTypes.element,
    register: PropTypes.element,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool
}
Login.defaultProps = {
    brand: 'NRT',
    lead: 'Welcome Back',
    text: 'Login or create account',
    forget: <p>Forget Password?</p>,
    register: <p>Don't have an account? Register</p>
}

export default Login