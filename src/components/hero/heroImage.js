import React from "react";
import PropTypes from 'prop-types'

const HeroImage = ({side,img}) => {
    return(
        side?
        <div data-testid='side' className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 lg:h-auto overflow-hidden">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src={img} alt={img}/>
        </div>
        :
        <div data-testid='normal' className="flex justify-center mt-10">
            <div className="w-full h-64 rounded-xl md:w-4/5">
                <img className="object-cover w-full h-full max-w-2xl rounded-xl" src={img} alt={img}/>
            </div>
        </div>
    )
}
HeroImage.propTypes = {
    side: PropTypes.bool,
    img: PropTypes.string
}
export default HeroImage