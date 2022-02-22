import React from 'react'
import PropTypes from 'prop-types'

const InfoFull = ({onClick,children}) => (
    <div className="w-full text-white bg-yellow-400">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
                </svg>

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

InfoFull.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string
}

InfoFull.defaultProps = {
    children: 'This version is not supported.'
}

export default InfoFull