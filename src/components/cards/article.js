import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

const Article = ({children,date,onClick,buttonText,title,linkRead,avatar,author}) => (
    <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{date}</span>
            {buttonText && <Button size='small' onClick={onClick}>{buttonText}</Button>}
        </div>

        <div className="mt-2">
            <div className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline cursor-pointer">{title}</div>
            <div className='mt-2 text-gray-600 dark:text-gray-300'>{children}</div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
            {linkRead  && <div className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">{linkRead}</div>}

            <div className="flex items-center">
                {avatar && <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={avatar} alt="avatar"/>}
                {author && <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{author}</div>}
            </div>
        </div>
    </div>
)

Article.propTypes = {
    date: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.element,
    linkRead: PropTypes.element,
    avatar: PropTypes.string,
    author: PropTypes.string
}

Article.defaultProps = {
    title: <a>Accessibility tools for designers and developers</a>,
}

export default Article