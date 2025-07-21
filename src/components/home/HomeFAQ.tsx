import React from 'react'

export default function HomeFAQ() {

    const qna = [
        {
            id: 1,
            question: "What am I getting as a Premium Member?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. "
        },
        {
            id: 2,
            question: "What am I getting as a Premium Member?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. "
        },
        {
            id: 3,
            question: "What am I getting as a Premium Member?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. "
        },
        {
            id: 4,
            question: "What am I getting as a Premium Member?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. "
        },
        {
            id: 5,
            question: "What am I getting as a Premium Member?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. "
        },
        {
            id: 6,
            question: "What am I getting as a Premium Member?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. "
        }
    ]

    return (
        <div className='bg-white mx-auto rounded-3xl max-w-5xl w-11/12 shadow-xl mb-10 shadow-gray-400/20  p-4'>
            <h1 className='text-4xl font-bold text-gray-700 text-center'>FAQs</h1>
            <section className="w-full">
                <ul className="max-w-2xl mx-auto text-black my-16 divide-y bg-white  rounded-xl">
                    {qna.map((item) => {
                        return (
                            <li key={item.id}>
                                <details className="group">
                                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                        <svg className="w-5 h-5 text-black font-bold transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                            </path>
                                        </svg>
                                        <span>{item.question}</span>
                                    </summary>

                                    <article className="px-6 pb-4">
                                        <p>
                                            {item.answer}
                                        </p>
                                    </article>
                                </details>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}