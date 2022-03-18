import React from "react";
import PropTypes from 'prop-types'

const CenteredFAQ = ({title,children}) => (

    <section className="bg-white dark:bg-gray-900">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
            <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">{title}</h1>

            <div className="mt-12 space-y-8">
                {children}
            </div>
        </div>
    </section>
)

CenteredFAQ.propTypes = {
    title: PropTypes.string
}

export default CenteredFAQ