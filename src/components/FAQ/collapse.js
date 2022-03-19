import React, { useState } from "react";
import PropTypes from 'prop-types'

const Collapse = ({title,children}) => {
    const [open,setOpen] = useState(false)
    
    return(
        <div data-testid='collapse'>
            <button className="flex items-center focus:outline-none" onClick={()=>setOpen(!open)}>
                {open?
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>}

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{title}</h1>
            </button>

            <div data-testid='text' className={open?'flex mt-8 md:mx-10':'hidden'}>
                <span className="border border-gray-400"></span>

                <div className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string
}

export default Collapse