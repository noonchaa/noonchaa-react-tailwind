import React from "react"
import PropTypes from 'prop-types'

const Main = ({children,white,neutral}) => {
    const theme = white ? 'bg-white dark:bg-black': neutral ? 'bg-neutral-50 dark:bg-neutral-900' : 'bg-slate-50 dark:bg-slate-900'
    return(
        <main className={theme}>
            {children}
        </main>
    )
}

Main.propTypes = {
    white: PropTypes.bool,
    neutral: PropTypes.bool
}

export default Main