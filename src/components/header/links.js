import React from "react";
import PropTypes from 'prop-types'

const Links = ({children,centered}) => {
    return(
        <div className={`flex ${centered?'flex-row':'flex-col md:flex-row'} md:mx-6 flex-wrap`}>
            {children}
        </div>
    )
}
Links.propTypes = {
    centered: PropTypes.bool
}
export default Links