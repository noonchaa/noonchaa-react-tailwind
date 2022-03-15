import React from "react";
import PropTypes from 'prop-types'

const Button = ({children,type,size,color,onClick,style}) => {
    const sizes = size === 'small' ? 'px-2 py-1 text-sm' : size === 'big' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base'
    const colors = color === 'success' ? 'bg-emerald-500 hover:bg-emerald-400 focus:ring-emerald-300': color === 'info' ? 'bg-blue-500 hover:bg-blue-400 focus:ring-blue-300': color === 'warning' ? 'bg-yellow-400 hover:bg-yellow-300 focus:ring-yellow-300': color === 'danger' ? 'bg-red-500 hover:bg-red-400 focus:ring-red-300':'bg-slate-500 hover:bg-slate-400 focus:ring-slate-300'

    return(
        <button type={type} onClick={onClick} className={`${sizes} font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring ${colors} focus:ring-opacity-80`} style={style}>
            {children}
        </button>
    )
}
Button.propTypes = {
    type: PropTypes.oneOf(['submit','reset','button']),
    size: PropTypes.oneOf(['small','normal','big']),
    color: PropTypes.oneOf(['success','info','warning','danger','normal']),
    onClick: PropTypes.func,
    style: PropTypes.object
}
Button.defaultProps = {
    type: 'button',
    size: 'normal',
    color: 'normal'
}

export default Button