import React from "react";
import PropTypes from 'prop-types'

const User = ({img,name,role}) => (
    <div data-testid='user' className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={img} alt="avatar"/>
        
        <div className="py-5 text-center">
            <div className="block text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">{name}</div>
            <span className="text-sm text-gray-700 dark:text-gray-200">{role}</span>
        </div>
    </div>
)

User.propTypes = {
    img: PropTypes.string,
    name: PropTypes.element,
    role: PropTypes.string
}

export default User