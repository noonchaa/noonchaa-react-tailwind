import React from "react";
import PropTypes from 'prop-types'

const ImageCTA = ({img,title,lead,button1Text,button1Click,button1Color,icon1,button2Text,button2Click,button2Color,icon2}) => (

    <section data-testid='img' className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
            <div className="flex justify-center xl:w-1/2">
                <div className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full overflow-hidden">{img}</div>
            </div>
            
            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                    {title}
                </h2>

                <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">{lead}</p>
                
                <div className="mt-6 sm:-mx-2">
                    <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                        {button1Text&&<button onClick={button1Click} className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto" style={button1Color&&{backgroundColor:button1Color,backgroundImage:'none'}}>
                            {icon1}
                            <span className="mx-2">
                                {button1Text}
                            </span>
                        </button>}
                    </div>

                    <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        {button2Text&&<button onClick={button2Click} className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600" style={button2Color&&{backgroundColor:button2Color,backgroundImage:'none'}}>
                            {icon2}
                            <span className="mx-2">
                                {button2Text}
                            </span> 
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

ImageCTA.propTypes = {
    img: PropTypes.element,
    title: PropTypes.string,
    lead: PropTypes.string,
    button1Text: PropTypes.string,
    button2Text: PropTypes.string,
    button1Color: PropTypes.string,
    button2Color: PropTypes.string,
    button1Click: PropTypes.func,
    button2Click: PropTypes.func,
    icon1: PropTypes.element,
    icon2: PropTypes.element
}

export default ImageCTA