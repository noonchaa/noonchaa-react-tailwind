import React, { useState } from "react";
import PropTypes from 'prop-types'

const LoginFillImage = ({brand, lead, onSubmit, forget, register, loading, bgUrl}) => {
    const [view, setView] = useState(false)
    return(
        <div data-testid='fillImage' class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage:`url(${bgUrl})`}}>
                    <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 class="text-4xl font-bold text-white">{brand}</h2>
                            
                            <p class="max-w-xl mt-3 text-gray-300">{lead}</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">{brand}</h2>
                            
                            <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>
    
                        <div class="mt-8">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                </div>
    
                                <div class="mt-6 relative">
                                    <div class="flex justify-between mb-2">
                                        <label htmlFor="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        {forget?
                                        <p className="text-xs text-gray-500 dark:text-gray-300 hover:underline">{forget}</p>
                                        :
                                        <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                                        }
                                    </div>
    
                                    <input type={view?'text':'password'} name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />

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
    
                                <div class="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                        {loading?
                                        <p className="animate-pulse">Loading</p>
                                        :
                                        'Login'}
                                    </button>
                                </div>
    
                            </form>
    
                            <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet?&nbsp;
                                {register?
                                <span className="text-xs text-gray-500 dark:text-gray-400 hover:underline">{register}</span>
                                :
                                <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">Sign up</a>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
LoginFillImage.propTypes = {
    brand: PropTypes.string,
    lead: PropTypes.string,
    onSubmit: PropTypes.func
}

export default LoginFillImage