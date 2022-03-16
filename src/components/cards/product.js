import React from "react";
import PropTypes from 'prop-types'

const Product = ({title,desc,price,buttonText,buttonClick,img}) => {
    return (
        <div data-testid='product' className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
                <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
    
            <div className="object-cover w-full h-48 mt-2 overflow-hidden">{img}</div>
    
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">{price}</h1>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none" onClick={buttonClick} >{buttonText}</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClick: PropTypes.func,
    img: PropTypes.element
}

export default Product