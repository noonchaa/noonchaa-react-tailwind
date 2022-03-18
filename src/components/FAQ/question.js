import React, { useState } from "react";
import PropTypes from 'prop-types'

const Question = ({title,children}) => {
    const [open,setOpen] = useState(false)

    return(
        <div data-testid='question' className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button className="flex items-center justify-between w-full p-8" onClick={()=>setOpen(!open)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">{title}</h1>
                {open?

                <span data-testid='open' className="text-gray-400 bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                    </svg>
                </span>
                :
                <span data-testid='close' className="text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </span>}
            </button>

            <hr className="border-gray-200 dark:border-gray-700"/>

            <div data-testid='text' className={open?"p-8 text-sm text-gray-500 dark:text-gray-300":'hidden'}>
                {children}
            </div>
        </div>
    )
}

Question.propTypes = {
    title: PropTypes.string
}

export default Question