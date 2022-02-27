import React from "react"
import PropTypes from 'prop-types'

const Breadcrumb = ({links, home}) => (
    <div className="flex justify-center items-center py-4 overflow-y-auto whitespace-nowrap bg-gray-200 dark:bg-gray-800">
        <div className="text-gray-600 dark:text-gray-200 cursor-pointer hover:underline">{home}</div>

        {links.map((item,index)=>(
            <div key={index} className="text-gray-600 dark:text-gray-200 last:text-blue-600 last:dark:text-blue-500 visited:text-fuchsia-500 capitalize">
                <span className="mx-5 text-gray-500 dark:text-gray-300">
                    /
                </span>
                <span className="hover:underline cursor-pointer">{item}</span>
            </div>

        ))}
    </div>

)

Breadcrumb.propTypes = {
    home: PropTypes.element,
    links: PropTypes.array
}

const link = ['page1','page2','page3']
Breadcrumb.defaultProps = {
    home:   <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>  
            </a>,
    links: link.map((item,index)=>(
        <p style={{display:'inline'}} key={index}>{item}</p>
    ))
}

export default Breadcrumb