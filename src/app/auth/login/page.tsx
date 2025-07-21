export default function Login() {
    return (
        <div className="">
            <div
                className="overflow-y-auto bg-white mt-8 min-h-screen bg-opacity-70 flex items-center justify-center"
            >
                <div
                    className="bg-white shadow-md shadow-cyan-50/30 w-1/3 rounded-3xl p-4 border-2 border-green-400"
                >
                    <div className="flex justify-end">
                        <button className="text-black font-bold text-xl"></button>
                    </div>
                    <div className="flex flex-col w-72 m-auto p-2">
                        <label className='text-black m-2 font-bold' htmlFor='email'>Phone Number/Email</label>
                        <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="email" placeholder="Enter your email or phone number" />
                    </div>
                    <div className="flex flex-col w-72 m-auto p-2">
                        <label className='text-black m-2 font-bold' htmlFor='password'>Password</label>
                        <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex flex-col p-2">
                        <button className="text-black bg-green-300 rounded-xl p-2 px-4 w-1/2 m-auto my-2 hover:shadow-xl">Login</button>
                        <button className="text-black bg-green-300 rounded-xl p-2 px-4 w-1/2 m-auto hover:shadow-xl">Login with OTP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
