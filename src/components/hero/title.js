import React from "react";
import PropTypes from 'prop-types'

const Title = ({children}) => {
    return <h1 className="text-3xl font-bold md:text-4xl mb-6">{children}</h1>
}
Title.propTypes = {
    children: PropTypes.node
}
export default Title