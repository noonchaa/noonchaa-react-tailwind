import React from 'react'
import PropTypes from 'prop-types'

const Card = ({icon,title,children,link,color,gray}) => (
    <div data-testid='card' className={`p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl ${gray&&'bg-gray-100 dark:bg-gray-800 border-0'}`} style={color&&{borderColor:color}}>
        <span className="inline-block text-blue-500 dark:text-blue-400" style={color&&{color:color}}>
            {icon}
        </span>

        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{title}</h1>

        <div className="text-gray-500 dark:text-gray-300">
            {children}
        </div>

        <div className="inline-flex text-blue-500 capitalize rounded-full dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer" style={color&&{color:color}}>
            {link}
        </div>
    </div>
)

Card.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    link: PropTypes.element,
    color: PropTypes.string,
    gray: PropTypes.bool
}

export default Card