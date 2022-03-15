import React from "react";
import PropTypes from 'prop-types'

const Testimony = ({img,title,content,name,color}) => (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" style={color?{borderColor:color}:{}} alt="Testimonial avatar" src={img}/>
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{title}</h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">{content}</p>
        
        <div className="flex justify-end mt-4">
            <p className="text-xl font-medium text-blue-500 dark:text-blue-300" style={color?{color:color}:{}}>{name}</p>
        </div>
    </div>
)

Testimony.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string
}

export default Testimony