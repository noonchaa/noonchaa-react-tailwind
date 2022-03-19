import React from "react";
import PropTypes from 'prop-types'

const CollapseFAQ = ({title,children}) => (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">{title}</h1>

            <hr className="my-6 border-gray-200 dark:border-gray-700"/>

            <div>
                {children}
            </div>
        </div>
    </section>
)

CollapseFAQ.propTypes = {
    title: PropTypes.string
}

export default CollapseFAQ