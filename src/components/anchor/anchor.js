import React from "react";
import PropTypes from 'prop-types'

const Anchor = ({children,block,line,color}) => {
    const text = color === 'red'?'hover:text-red-600 dark:hover:text-red-500': color === 'blue'?'hover:text-blue-600 dark:hover:text-blue-500': color === 'green'?'hover:text-green-600 dark:hover:text-green-500': color === 'yellow'?'hover:text-yellow-600 dark:hover:text-yellow-500':''
    return(
        <div className={`my-1 capitalize text-sm mx-4 font-medium text-slate-700 transition-colors duration-200 transform dark:text-slate-200 ${block?'hover:bg-slate-900 hover:text-slate-200 hover:px-2 rounded dark:hover:bg-slate-200 dark:hover:text-slate-700':''} ${text} ${line?'hover:underline underline-offset-2':''}`}>
            {children}
        </div>
    )
}
Anchor.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool,
    line: PropTypes.bool,
    color: PropTypes.oneOf(['red','blue','green','yellow'])
}
export default Anchor