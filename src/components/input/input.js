import React from "react";
import PropTypes from 'prop-types'

const Input = ({label,type,name,id,onChange,value,placeholder,readOnly,disabled,minLength,maxLength,min,max,required,multiple,list,autoComplete}) => {
    return(
        <div>
            {label?
            <label for={id} class="block text-sm text-gray-800 dark:text-gray-200">{label}</label>
            :''}
            <input
            type={type}
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name={name}
            value={value}
            readOnly={readOnly?true:false}
            disabled={disabled?true:false}
            minLength={minLength?minLength:false}
            maxLength={maxLength?maxLength:false}
            min={min?min:false}
            max={max?max:false}
            placeholder={placeholder}
            required={required?true:false}
            multiple={multiple?true:false}
            list={list?list:false}
            autoComplete={autoComplete?'on':'off'}
            onChange={onChange}
            />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['text','email']),
    name: PropTypes.string,
    value: PropTypes.object,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    multiple: PropTypes.bool,
    list: PropTypes.string,
    autoComplete: PropTypes.bool,
    onChange: PropTypes.func
}

export default Input