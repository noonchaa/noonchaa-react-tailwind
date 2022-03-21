import React from "react";
import PropTypes from 'prop-types'

const CardFeature = ({title,lead,children,centered}) => (
    <section className="bg-white dark:bg-gray-900">
        <div data-testid='center' className={`container px-6 py-10 mx-auto ${centered&&'text-center'}`}>
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{title}</h1>
            
            <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                {lead}
            </p>
            
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {children}
            </div>
        </div>
    </section>
)

CardFeature.propTypes = {
    title: PropTypes.string,
    lead: PropTypes.string,
    centered: PropTypes.bool
}

export default CardFeature