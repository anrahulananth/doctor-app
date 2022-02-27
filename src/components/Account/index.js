import { useAppStateContext } from "../../context/AppStateProvider";

function Account() {
    const { appState } = useAppStateContext();
    const { firstName, lastName, email, phone } = appState.user;
    return (
        <div className="relative max-w-4xl mx-auto my-4">
            <h1 className="text-2xl font-bold text-text2">Your Account</h1>
            <h3 className="text-lg leading-6 font-medium text-text2 py-4 max-w-max">
                View your account details and make edits.
            </h3>
            <div className="p-6">
                <label htmlFor="name" className="block text-sm mt-6 font-medium text-gray-700">
                    NAME
                </label>
                <div className="mt-1">
                    <input
                        readOnly
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm focus:ring-primary1 focus:border-primary1 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={`${firstName} ${lastName ? lastName : ""}`}
                    />
                </div>
                <label htmlFor="phone-number" className="block text-sm mt-6 font-medium text-gray-700">
                    PHONE NUMBER
                </label>
                <div className="mt-1">
                    <input
                        readOnly
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className="shadow-sm focus:ring-primary1 focus:border-primary1 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={phone}
                    />
                </div>
                <label htmlFor="email" className="block text-sm mt-6 font-medium text-gray-700">
                    EMAIL ID
                </label>
                <div className="mt-1">
                    <input
                        readOnly
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-primary1 focus:border-primary1 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={email}
                    />
                </div>
            </div>
        </div>
    );
}

export default Account;
