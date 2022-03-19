import React from "react";
import PropTypes from 'prop-types'

const GridFAQ = ({title,children}) => (

    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">{title}</h1>
            
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                {children}
            </div>
        </div>
    </section>
)

GridFAQ.propTypes = {
    title: PropTypes.string
}

export default GridFAQ