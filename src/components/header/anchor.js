import React from "react";
import PropTypes from 'prop-types'

const Anchor = ({children,block,line,color}) => {
    const text = color === 'red'?'hover:text-red-600 dark:hover:text-red-500': color === 'blue'?'hover:text-blue-600 dark:hover:text-blue-500': color === 'green'?'hover:text-green-600 dark:hover:text-green-500': color === 'yellow'?'hover:text-yellow-600 dark:hover:text-yellow-500':'hover:text-slate-600 dark:hover:text-slate-400'
    const colorBlock = color === 'red' ? 'hover:bg-red-600 hover:text-slate-50 hover:px-2 rounded dark:hover:bg-red-500 dark:hover:text-slate-50': color === 'blue' ? 'hover:bg-blue-600 hover:text-slate-50 hover:px-2 rounded dark:hover:bg-blue-500 dark:hover:text-slate-50' : color === 'green' ? 'hover:bg-green-600 hover:text-slate-50 hover:px-2 rounded dark:hover:bg-green-500 dark:hover:text-slate-50' : color === 'yellow' ? 'hover:bg-yellow-600 hover:text-slate-50 hover:px-2 rounded dark:hover:bg-yellow-500 dark:hover:text-slate-50' : 'hover:bg-slate-600 hover:text-slate-50 hover:px-2 rounded dark:hover:bg-slate-500 dark:hover:text-slate-50'
    return(
        <div className={`my-1 capitalize text-sm md:mx-4 font-medium text-slate-700 transition-colors duration-200 transform dark:text-slate-200 ${block? colorBlock:''} ${text} ${line?'hover:underline underline-offset-2':''}`}>
            {children}
        </div>
    )
}
Anchor.propTypes = {
    block: PropTypes.bool,
    line: PropTypes.bool,
    color: PropTypes.oneOf(['red','blue','green','yellow'])
}
export default Anchor