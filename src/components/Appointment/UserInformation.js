import { HiOutlineClock, HiOutlineCurrencyRupee, HiOutlinePencil } from "react-icons/hi";
import { useAuthContext } from "../../context/AuthProvider";
const UserInformation = () => {
    const { user } = useAuthContext();
    const { firstName, lastName, email, phone } = user;
    console.log("===>", user);
    return (
        <div className="flex flex-row space-x-4 my-8">
            <div className="basis-1/2 bg-white border shadow-cardshadow1 border-background4 rounded-md p-6">
                <div className="text-lg text-text2 font-bold">Fill up patient information</div>
                <label htmlFor="first-name" className="block text-sm mt-6 font-medium text-gray-700">
                    FIRST NAME
                    <span className="text-red-500">&nbsp;*</span>
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="shadow-sm focus:ring-primary1 focus:border-primary1 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={firstName}
                    />
                </div>
                <label htmlFor="last-name" className="block text-sm mt-6 font-medium text-gray-700">
                    LAST NAME
                    <span className="text-red-500">&nbsp;*</span>
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="shadow-sm focus:ring-primary1 focus:border-primary1 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={lastName}
                    />
                </div>
                <label htmlFor="phone-number" className="block text-sm mt-6 font-medium text-gray-700">
                    PHONE NUMBER
                    <span className="text-red-500">&nbsp;*</span>
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className="shadow-sm focus:ring-primary1 focus:border-primary1 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={phone}
                    />
                </div>
                <label htmlFor="email" className="block text-sm mt-6 font-medium text-gray-700">
                    EMAIL ID
                    <span className="text-red-500">&nbsp;*</span>
                </label>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-primay1-500 focus:border-primay1-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={email}
                    />
                </div>
            </div>
            <div className="basis-1/2 bg-white border shadow-cardshadow1 border-background4 rounded-md p-6">
                <div className="flex flex-row items-center">
                    <img src="/assets/images/doctor-anita-large.jpg" className="h-10 w-10 rounded-full" />
                    <div className="ml-4 text-lg text-text2 font-bold">Appointment with Dr Anita Balakrishna</div>
                </div>
                <div className="mt-8">
                    <div className="text-lg text-text2 font-semibold">
                        Pregnancy Consultation
                    </div>
                    <div className="flex mt-2">
                        <div className="flex items-center text-sm text-text2">
                            <HiOutlineClock className="text-background6" />
                            <div className="ml-1">10 min</div>
                        </div>
                        <div className="ml-8 flex items-center text-sm text-text2">
                            <HiOutlineCurrencyRupee className="text-background6" />
                            <div className="ml-1">Rs 500</div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-lg text-text2 font-semibold">
                        Address
                    </div>
                    <div className="text-base text-text2 font-medium mt-2">
                        In Person
                    </div>
                    <div className="text-base text-text2">
                        Gynecology/Obstetrics Clinic<br />
                        #B-001, 10/1, Ground floor, Victoria lawns,<br />
                        Victoria Road, Victoria Layout, Bangalore
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-lg text-text2 font-semibold">
                        Date
                    </div>
                    <div className="text-base text-text2 font-medium mt-2">
                        12th November 2021, 5:00 PM IST
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="rounded-full text-primary1 font-bold bg-background7 border border-transparent hover:border-primary1 py-3 px-4 flex items-center">
                        <HiOutlinePencil />&nbsp;Edit Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInformation;
