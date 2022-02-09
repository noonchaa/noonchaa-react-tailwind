import React from "react"
import PropTypes from 'prop-types'

const Container = ({children,center,slate,neutral,style,flexCenter,flexBetween,flexAround,flexEven}) => {
    const flex = flexCenter ? 'flex flex justify-center' : flexBetween ? 'flex justify-between' : flexAround ? 'flex justify-around' : flexEven ? 'flex justify-evenly' : ''
    const bg = slate ? 'bg-slate-100 dark:bg-slate-800': neutral ? 'bg-neutral-100 dark:bg-neutral-900':''
    return <div data-testid='container' className={`container mx-auto ${center?'text-center':''} ${bg} ${flex}`} style={style}>{children}</div>
}
Container.propTypes = {
    center: PropTypes.bool,
    slate: PropTypes.bool,
    neutral: PropTypes.bool,
    style: PropTypes.object,
    flexCenter: PropTypes.bool,
    flexBetween: PropTypes.bool,
    flexAround: PropTypes.bool,
    flexEven: PropTypes.bool
}
export default Container