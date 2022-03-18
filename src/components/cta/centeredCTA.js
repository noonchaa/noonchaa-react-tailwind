import React from "react";
import PropTypes from 'prop-types'

const CenteredCTA = ({title,lead,icon1,icon2,buttonClick1,buttonClick2,buttonText1,buttonText2,button1Color,button2Color}) => (
    <section data-testid='centered' className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-600 dark:text-white">
                {title}
            </h2>

            <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">{lead}</p>
            
            <div className="mt-6">
                <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
                    {buttonText1 && <button className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto" onClick={buttonClick1}style={button1Color && {backgroundColor:button1Color,backgroundImage:'none'}}>
                        {icon1}
                        <span className="mx-2">
                            {buttonText1}
                        </span>
                    </button>}
                </div>

                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
                    {buttonText2 && <button className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600" onClick={buttonClick2} style={button2Color && {backgroundColor:button2Color,backgroundImage:'none'}}>
                        {icon2}
                        <span className="mx-2">
                            {buttonText2}
                        </span> 
                    </button>}
                </div>
            </div>
        </div>
    </section>
)

CenteredCTA.propTypes = {
    title: PropTypes.string,
    lead: PropTypes.string,
    buttonText1: PropTypes.string,
    buttonText2: PropTypes.string,
    buttonClick1: PropTypes.func,
    buttonClick2: PropTypes.func,
    button1Color: PropTypes.string,
    button2Color: PropTypes.string,
    icon1: PropTypes.element,
    icon2: PropTypes.element
}

export default CenteredCTA