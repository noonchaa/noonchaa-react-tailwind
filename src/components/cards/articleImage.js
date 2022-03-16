import React from 'react'
import PropTypes from 'prop-types'

const ArticleWithImage = ({children,img,tag,title,avatar,author,date}) => (
    <section data-testid='withImage' className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        {img && <img className="object-cover w-full h-64" src={img} alt="Article"/>}

        <div className="p-6">
            <div>
                {tag && <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{tag}</span>}
                <div className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{title}</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{children}</div>
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                        {avatar && <img className="object-cover h-10 rounded-full" src={avatar} alt="Avatar"/>}
                        <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{author}</p>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{date}</span>
                </div>
            </div>
        </div>
    </section>
)

ArticleWithImage.propTypes = {
    img: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.element,
    avatar: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
}

ArticleWithImage.defaultProps = {
    title: <a>Accessibility tools for designers and developers</a>,
}

export default ArticleWithImage