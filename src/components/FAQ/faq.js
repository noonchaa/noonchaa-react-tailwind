import React from "react";
import PropTypes from 'prop-types'

const FAQ = ({children,title}) => (

    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">{title}</h1>

            <div className="mt-8 space-y-8 lg:mt-12">
                {children}
            </div>
        </div>
    </section>
)

FAQ.propTypes = {
    title: PropTypes.string
}

export default FAQ