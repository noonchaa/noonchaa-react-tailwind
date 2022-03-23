import React from "react";
import PropTypes from 'prop-types'

const Grid = ({icon,title,children,link,color,iconBgColor}) => {
    return(
        <div className="space-y-3">
            {icon && <span data-testid='icon' className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500" style={color || iconBgColor ?{color:color,backgroundColor:iconBgColor}:{}}>
                {icon}
            </span>}
    
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{title}</h1>
    
            <div className="text-gray-500 dark:text-gray-300">
                {children}
            </div>
    
            <div className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer" style={color&&{color:color}}>
                {link}
            </div>
        </div>
    )
}

Grid.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.element,
    color: PropTypes.string,
    iconBgColor: PropTypes.string
}

export default Grid