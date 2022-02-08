import React from "react"
import PropTypes from 'prop-types'

const Main = ({children,slate,neutral}) => {
    const theme = slate ? 'bg-slate-50 dark:bg-slate-900': neutral ? 'bg-neutral-50 dark:bg-neutral-900' : 'bg-white dark:bg-black'
    return(
        <main className={theme}>
            {children}
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.node,
    slate: PropTypes.bool,
    neutral: PropTypes.bool
}

export default Main