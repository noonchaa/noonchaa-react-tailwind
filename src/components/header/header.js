import React from "react";
import PropTypes from 'prop-types'

const Header = ({children,glass,centered,sticky,onClick}) => {
    return(
        <header data-testid='header' className={`shadow ${glass?'bg-transparent':'bg-slate-50 dark:bg-slate-800'} ${sticky?'sticky top-0 z-50':'relative'}`}>
            <nav className={`container px-6 py-4 mx-auto relative`}>
                {centered?
                <div data-testid='centered'/>:
                <div data-testid='menu' className='md:hidden absolute top-4 z-50 right-6' onClick={onClick}>
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 h-8 my-auto" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>}
                <div className={`${centered?'flex justify-center items-center':'md:flex md:justify-between md:items-center'}`}>
                {children}
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    glass: PropTypes.bool,
    centered: PropTypes.bool,
    sticky: PropTypes.bool,
    onClick: PropTypes.func
}
export default Header