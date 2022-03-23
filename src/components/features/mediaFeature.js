import React from "react";
import PropTypes from 'prop-types'

const MediaFeature = ({title,media,children}) => (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{title}</h1>
        
        {media&&<iframe data-testid='media' className="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden" src={media} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title={title}/>}

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
            {children}
        </div>
    </div>
</section>
)

MediaFeature.propTypes = {
    title: PropTypes.string,
    media: PropTypes.string
}

export default MediaFeature