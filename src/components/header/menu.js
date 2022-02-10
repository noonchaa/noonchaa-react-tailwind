import React from "react";
import PropTypes from 'prop-types'

const Menu = ({children,open,toggle}) => {
    return(
        <div className={open?'items-center md:flex':'hidden md:flex'}>
            {children}
            {toggle?
            <div className="flex justify-end md:block my-1">
                {toggle}
            </div>:''
            }
        </div>
    )
}

Menu.propTypes = {
    open: PropTypes.bool,
}
export default Menu