import Link from "next/link";

export default function Landing() {
    return (
        <>
            <div className="relative pt-10 pb-10 bg-background1 bg-opacity-1">
                <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <h1 className="text-buttonshadow tracking-tight font-extrabold md:max-w-3xl text-gray-900 text-5xl md:text-buttonshadow leading-extra-loose">
                        Skilled Dental  Personnel With Local Experience
                    </h1>
                    <p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta justo sed ipsum laoreet, at interdum ante imperdiet.
                    </p>
                    <div className="mt-16 w-max sm:flex md:mt-8">
                        <button className="w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary1 hover:bg-fuchsia-900 md:py-4 md:text-lg md:px-10 shadow-buttonshadow hover:shadow-lg hover:shadow-primary1">
                            <Link href={"/book-appointment"}>
                                Book an appointment
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
