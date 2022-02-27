import React, { useState } from "react";
import PropTypes, { element } from 'prop-types'

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

const LoginWithSosMed = ({brand, onSubmit, forget, register, loading, google, twitter, addMedia1, addMedia2, addMedia3, addMedia4, addMedia5}) => {
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
        <div data-testid='social' className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">{brand}</h1>

            <form className="mt-6" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input data-testid='email' type="email" className={`block w-full px-4 py-2 mt-2 ${emailVer?'text-gray-700 dark:text-gray-300':'text-red-600'} bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`} onBlur={(e)=>emailVerification(e)} required id="email"/>
                </div>

                <div className="mt-4 relative">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <div className="text-xs text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">{forget}</div>
                    </div>

                    <input data-testid='password' type={view?'text':'password'} className={`block w-full px-4 py-2 mt-2 ${passVer?'text-gray-700 dark:text-gray-300':'text-red-600'} bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`} onBlur={(e)=>passwordVerification(e)} required id="password"/>

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
                    <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:cursor-not-allowed" disabled={emailVer && passVer?false:true}>
                        {loading?
                        loadingSvg
                        :
                        'Login'}
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or login with Social Media</p>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex justify-center items-center mt-6 -mx-2">
                <button className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200" onClick={google}>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>
                </button>

                <button className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200" onClick={twitter}>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                        </path>
                    </svg>
                </button>
                {addMedia1}
                {addMedia2}
                {addMedia3}
                {addMedia4}
                {addMedia5}
            </div>
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 cursor-pointer">{register}</div>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>
        </div>
    )
}

LoginWithSosMed.propTypes = {
    brand: PropTypes.string,
    forget: PropTypes.element,
    register: PropTypes.element,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool,
    google: PropTypes.func,
    twitter: PropTypes.func,
    addMedia1: PropTypes.element,
    addMedia2: PropTypes.element,
    addMedia3: PropTypes.element,
    addMedia4: PropTypes.element,
    addMedia5: PropTypes.element
}
LoginWithSosMed.defaultProps = {
    brand: 'NRT',
    forget: <p>Forget Password?</p>,
    register: <p>or sign up</p>
}

export default LoginWithSosMed