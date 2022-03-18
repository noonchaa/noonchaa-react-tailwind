import React from "react";
import PropTypes from 'prop-types'

const SimpleCTA = ({title,buttonText1,buttonText2,buttonClick1,buttonClick2,color}) => (
    <section data-testid='simpleCTA' className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
                {title}
            </h2>
            
            <div className="mt-6 sm:-mx-2">
                <div className="inline-flex w-full sm:w-auto sm:mx-2">
                    <button data-testid='button1' onClick={buttonClick1} className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500" style={color?{backgroundColor:color}:{}}>
                        {buttonText1}
                    </button>
                </div>

                <div className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                    {buttonText2 && <button data-testid='button2' onClick={buttonClick2} className="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                        {buttonText2}
                    </button>}
                </div>
            </div>
        </div>
    </section>
)

SimpleCTA.propTypes = {
    title: PropTypes.string,
    buttonText1: PropTypes.string,
    buttonText2: PropTypes.string,
    buttonClick1: PropTypes.func,
    buttonClick2: PropTypes.func,
    color: PropTypes.string
}

export default SimpleCTA