const Auth = () => (
    <div className="flex flex-row space-x-4 my-8 justify-center">
        <div className="basis-1/2 bg-white border shadow-cardshadow1 border-background4 rounded-md px-20 py-16">
            <div className="bg-background8 flex flex-row justify-between space-x-2 rounded p-1">
                <div className="bg-white grow text-center p-2 rounded-md font-medium cursor-pointer border border-transparent">
                Sign In
                </div>
                <div className="grow text-center p-2 rounded-md font-medium cursor-pointer border border-transparent hover:border-primary1 hover:bg-background7">
                Sign Up
                </div>
            </div>
            <label htmlFor="email" className="block text-sm mt-6 font-medium text-gray-700">
            Email
                <span className="text-red-500">&nbsp;*</span>
            </label>
            <div className="mt-1">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-primay1-500 focus:border-primay1-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                />
            </div>
            <label htmlFor="email" className="block text-sm mt-6 font-medium text-gray-700">
            Password
                <span className="text-red-500">&nbsp;*</span>
            </label>
            <div className="mt-1">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-primay1-500 focus:border-primay1-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                />
            </div>
            <div className="mt-8 flex justify-center">
                <button className="rounded-full text-white font-bold bg-primary1 border border-transparent shadow-buttonshadow hover:border-primary1 py-3 px-10 flex items-center">
                Sign In
                </button>
            </div>
        </div>
    </div>
);

export default Auth;
