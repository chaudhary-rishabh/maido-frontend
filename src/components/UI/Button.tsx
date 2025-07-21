import React from 'react'

type contentType = {
    content: string,
    className?: string
}
const Button = ({ content, className }: contentType) => {
    return (
        <button className={`${className} rounded-xl bg-green-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all hover:shadow-lg focus:shadow-none active:bg-green-400 hover:bg-green-500 shadow-lg shadow-gray-300/30 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`} type="button">
            {content}
        </button>
    )
}

export default Button