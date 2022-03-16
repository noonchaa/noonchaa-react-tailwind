import React from "react";
import PropTypes from 'prop-types'

const ProductRating = ({img,title,desc,price,buttonText,buttonClick,star}) => {
    let rating = star <= 5 ? Array(star).fill(1,0,star) : Array(5).fill(1,0,5)
    return(
        <div data-testid='product-rating' className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover bg-center" style={{backgroundImage:`url(${img})`}}></div>
    
            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
    
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    
                <div className="flex mt-2 item-center">
                    {rating.map((_item,index)=>(
                        <svg data-testid='star' key={index} className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                    ))}
                </div>
    
                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={buttonClick} >{buttonText}</button>
                </div>
            </div>
        </div>
    )
} 

ProductRating.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClick: PropTypes.func,
    star: PropTypes.number
}

export default ProductRating