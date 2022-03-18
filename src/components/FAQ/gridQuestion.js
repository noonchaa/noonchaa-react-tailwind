import React from "react";
import PropTypes from 'prop-types'

const GridQuestion = ({title,children,icon,iconBgColor}) => (
    <div data-testid='grid'>
        {icon&&<div data-testid='icon' className="inline-block p-3 text-white bg-blue-600 rounded-lg" style={iconBgColor&&{backgroundColor:iconBgColor}}>
            {icon}
        </div>}

        <div>
            <h1 className="text-xl font-semibold text-gray-700 dark:text-white">{title}</h1>

            <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                {children}
            </div>
        </div>
    </div>
)

GridQuestion.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    iconBgColor: PropTypes.string
}

export default GridQuestion