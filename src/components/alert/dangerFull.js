import React from 'react'
import PropTypes from 'prop-types'

const DangerFull = ({onClick,children}) => (
    <div className="w-full text-white bg-red-500">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
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

DangerFull.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string
}

DangerFull.defaultProps = {
    children: 'Validation Error.'
}

export default DangerFull