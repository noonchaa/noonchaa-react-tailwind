import React from "react";
import PropTypes from 'prop-types'

const Notification = ({img,children}) => (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

        <div className="flex items-center px-2 py-3">
            {img?
            <img className="object-cover w-10 h-10 rounded-full" alt="User avatar" src={img}/>
            :
            <svg data-testid='svg' xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }
            
            <div className="mx-3">
                <p className="text-gray-600 dark:text-gray-200">{children}</p>
            </div>
        </div>
    </div>
)

Notification.propTypes = {
    img: PropTypes.string,
    children: PropTypes.string
}
Notification.defaultProps = {
    img: 'https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
    children: 'Sara has replied on the uploaded image!'
}

export default Notification