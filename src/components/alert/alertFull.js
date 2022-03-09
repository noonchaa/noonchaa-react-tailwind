import React from 'react'
import PropTypes from 'prop-types'

const iconSvg = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>

const AlertFull = ({onClick,children,bgColor,color,icon}) => (
    <div className="w-full text-white bg-gray-600" style={{backgroundColor:bgColor,color:color}}>
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex">
                {icon}

                <p className="mx-3">{children}</p>
            </div>

            <button className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none" onClick={onClick}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
)

AlertFull.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.element
}

AlertFull.defaultProps = {
    children: 'Your alert message here!',
    icon: iconSvg
}

export default AlertFull