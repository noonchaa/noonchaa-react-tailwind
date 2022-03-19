import React from "react";
import PropTypes from 'prop-types'

const Simple = ({icon,title,children}) => (
    <div>
        {icon}

        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>

        <div className="mt-2 text-gray-500 dark:text-gray-400">{children}</div>
    </div>
)

Simple.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
}

export default Simple