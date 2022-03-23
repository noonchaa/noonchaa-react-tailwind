import React from "react";
import PropTypes from 'prop-types'


const LeftIcon = ({icon,title,children,color,iconBgColor}) => {
    let iconStyle = {}
    if(color) iconStyle={...iconStyle,color:color}
    if(iconBgColor) iconStyle={...iconStyle,backgroundColor:iconBgColor}

    return(
        <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div className="md:flex md:items-start md:-mx-4">
                {icon&&<span data-testid='icon' className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500" style={iconStyle}>
                    {icon}
                </span>}
    
                <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">{title}</h1>
    
                    <div className="mt-3 text-gray-500 dark:text-gray-300">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

LeftIcon.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    color: PropTypes.string,
    iconBgColor: PropTypes.string
}

export default LeftIcon