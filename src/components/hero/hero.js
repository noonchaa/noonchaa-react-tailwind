import React from  'react'
import PropTypes from 'prop-types'

const Hero = ({children,stack,fullBG}) => {
    return(
        fullBG?
        <section className='w-full bg-center bg-cover min-h-[32rem]' style={{backgroundImage:`url(${fullBG})`}}>
            <div className='flex items-center justify-center w-full min-h-[32rem] bg-slate-900 bg-opacity-50'>
                <div className='text-center text-white container mx-auto py-16'>
                {children}
                </div>
            </div>
        </section>
        :stack?
        <section className='bg-slate-50 dark:bg-slate-800'>
            <div className='container px-6 py-16 mx-auto text-center'>
                <div className='max-w-lg mx-auto text-slate-800 dark:text-white'>
                {children}
                </div>
            </div>
        </section>
        :
        <section className='bg-slate-50 dark:bg-slate-800'>
        <div className='container px-6 py-16 mx-auto'>
            <div className='items-center lg:flex text-slate-800 dark:text-white'>
            {children}
            </div>
        </div>
        </section>
    )
}
Hero.propTypes = {
    stack: PropTypes.bool,
    fullBG: PropTypes.string
}
export default Hero