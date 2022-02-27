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

const LoginSideImage = ({brand, onSubmit, forget, register, loading, google, bgUrl, lead}) => {
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
        <div data-testid='sideImage' className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage:`url(${bgUrl})`}}></div>
            
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">{brand}</h2>

                <p className="text-xl text-center text-gray-600 dark:text-gray-200">{lead}</p>

                <div className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={google}>
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or login with email</p>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">Email Address</label>
                        <input data-testid='email' id="email" className={`block w-full px-4 py-2 ${emailVer?'text-gray-700 dark:text-gray-300':'text-red-600'} bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300`} onBlur={(e)=>emailVerification(e)} type="email" required/>
                    </div>

                    <div className="mt-4 relative">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password">Password</label>
                            <div className="text-xs text-gray-500 dark:text-gray-300 hover:underline cursor-pointer">{forget}</div>
                        </div>

                        <input data-testid='password' id="password" className={`block w-full px-4 py-2 ${passVer?'text-gray-700 dark:text-gray-300':'text-red-600'} bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300`} type={view?'text':'password'} onBlur={(e)=>passwordVerification(e)} required />
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

                    <div className="mt-8">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:cursor-not-allowed" disabled={emailVer && passVer?false:true}>
                        {loading?
                        loadingSvg
                        :
                        'Login'}
                        </button>
                    </div>
                </form>
                
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <span className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">{register}</span>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    )
}
LoginSideImage.propTypes = {
    bgUrl: PropTypes.string,
    brand: PropTypes.string,
    lead: PropTypes.string,
    forget: PropTypes.element,
    register: PropTypes.element,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool
}
LoginSideImage.defaultProps = {
    brand: 'NRT',
    lead: 'Welcome back!',
    bgUrl: 'https://source.unsplash.com/3IR3fozccY8',
    forget: <p>Forget Password?</p>,
    register: <p>or sign up</p>
}

export default LoginSideImage