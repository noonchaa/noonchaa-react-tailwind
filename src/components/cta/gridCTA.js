import React from "react";
import PropTypes from 'prop-types'

const GridCTA = ({title1,lead1,button1Text,button1Click,button1Color,title2,lead2,button2Text,button2Click,button2Color}) => (
    <section data-testid='grid' className="bg-white dark:bg-gray-900">
        <div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
                    {title1}
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">{lead1}</p>
                
                {button1Text && <button onClick={button1Click} className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" style={button1Color&&{backgroundColor:button1Color}}>
                    {button1Text}
                </button>}
            </div>

            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
                    {title2}
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">{lead2}</p>
                
                {button2Text && <button onClick={button2Click} className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80" style={button2Color&&{backgroundColor:button2Color,color:'#ffffff'}}>
                    {button2Text}
                </button>}
            </div>
        </div>
    </section>
)

GridCTA.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    lead1: PropTypes.string,
    lead2: PropTypes.string,
    button1Text: PropTypes.string,
    button2Text: PropTypes.string,
    button1Color: PropTypes.string,
    button2Color: PropTypes.string,
    button1Click: PropTypes.func,
    button2Click: PropTypes.func
}

export default GridCTA