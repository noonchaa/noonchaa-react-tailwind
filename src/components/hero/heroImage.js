import React from "react";
import PropTypes from 'prop-types'

const HeroImage = ({children,side}) => {
    return(
        side?
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            {children}
        </div>
        :
        <div className="flex justify-center mt-10">
            <div className="w-full h-64 rounded-xl md:w-4/5">
            {children}
            </div>
        </div>
    )
}
HeroImage.propTypes = {
    side: PropTypes.bool
}
export default HeroImage