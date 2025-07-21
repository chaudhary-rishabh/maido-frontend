export default function Signup() {
    return (
        <div className="">
            <div
                className="flex items-center justify-center mt-8 bg-white min-h-screen bg-opacity-60 z-[1000]"
            >
                <div
                    className="bg-white shadow-md shadow-cyan-50/30 w-1/3 rounded-3xl p-4 border-2 border-green-400 z-50"
                >
                    <div className="flex justify-end">
                        <button className="text-black font-bold text-xl"></button>
                    </div>
                    <div className="flex flex-col w-72 m-auto p-2">
                        <label className='text-black m-2 font-bold' htmlFor='name'>Name</label>
                        <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="text" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col w-72 m-auto p-2">
                        <label className='text-black m-2 font-bold' htmlFor='email'>Phone Number/Email</label>
                        <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="email" placeholder="Enter your email or phone number" />
                    </div>
                    <div className="flex flex-col w-72 m-auto p-2">
                        <label className='text-black m-2 font-bold' htmlFor='password'>Password</label>
                        <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex flex-col w-72 m-auto p-2">
                        <label className='text-black m-2 font-bold' htmlFor='location'>Location</label>
                        <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="text" placeholder="Enter your location" />
                    </div>
                    <div className="flex justify-center p-2">
                        <button className="text-black bg-green-300 rounded-xl p-2 px-4 hover:shadow-xl">Signup&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
