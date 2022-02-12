import React from "react";
import PropTypes from 'prop-types'

const Button = ({children,type,size,color,onClick,icon}) => {
    const sizes = size === 'small' ? 'px-2 py-1 text-sm' : size === 'big' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base'
    const colors = color === 'success' ? 'bg-emerald-500 hover:bg-emerald-400 focus:ring-emerald-300': color === 'info' ? 'bg-blue-500 hover:bg-blue-400 focus:ring-blue-300': color === 'warning' ? 'bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-300': color === 'danger' ? 'bg-red-500 hover:bg-red-400 focus:ring-red-300':'bg-slate-500 hover:bg-slate-400 focus:ring-slate-300'

    return(
        <button type={type?type:'button'} className={`${icon?'flex items-center':''} ${sizes} font-medium tracking-wide text-white capitalize transition-colors duration-200 transform ${colors} rounded-md focus:outline-none focus:ring focus:ring-opacity-80`} onClick={onClick}>
            {icon?
            <>
                <img src={icon} alt='icon' className="text-white w-5 h-5 mx-1"/>
                {children?
                <span className="mx-1">{children}</span>
                :''
                }
            </>
            :
            children
            }
        </button>
    )
}
Button.propTypes = {
    type: PropTypes.oneOf(['submit','reset','button']),
    size: PropTypes.oneOf(['small','normal','big']),
    color: PropTypes.oneOf(['success','info','warning','danger','normal']),
    onClick: PropTypes.func,
    icon: PropTypes.string
}

export default Button