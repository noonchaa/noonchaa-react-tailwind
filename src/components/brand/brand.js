import React from "react";
import PropTypes from 'prop-types'

const Brand = ({children,logo}) => {
    return(
        <div className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
            <span data-testid='brandLogo'>{logo?<img src={logo} alt='logo' className="h-6 lg:h-8 inline-block" />:''}</span>
            {children}
        </div>
    )
}
Brand.propTypes = {
    children: PropTypes.string,
    logo: PropTypes.string
}
export default Brand