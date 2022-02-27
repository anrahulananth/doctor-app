import { Fragment } from "react";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { RiLogoutBoxRLine, RiUser3Fill } from "react-icons/ri";
import Link from "next/link";
import classNames from "classnames";
import styled from "styled-components";
import { useAppStateContext } from "../../context/AppStateProvider";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

const NavLink = styled.div`
    position: relative;
    &.active::after {
        position: absolute;
        display: block;
        top: 110%;
        left: 50%;
        content: "";
        transform: translateX(-50%);
        height: 0.5rem;
        width: 0.5rem;
        background: ${props => props.theme.colors.primary1};
        border-radius: 50%;
    }
`;

export default function Header({ user }) {
    const router = useRouter();
    const { doLogout } = useAppStateContext();
    const { isLoggedIn, firstName, lastName } = user;
    const handleLogout = () => {
        router.replace("/");
        doLogout();
    };
    return (
        <header>
            <div className="relative py-4 sm:py-6 md:py-10 bg-opacity-1 bg-background1">
                <Popover>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <Link href="/" passHref>
                                        <div className="cursor-pointer">
                                            <span className="sr-only">Workflow</span>
                                            <img
                                                className="h-8 w-auto sm:h-10"
                                                src="/assets/images/diva-care.png"
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-text2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary1">
                                            <span className="sr-only">Open main menu</span>
                                            <MdOutlineMenu className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex lg:justify-between md:flex md:justify-between">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        className={
                                            classNames(
                                                "flex flex-col justify-end items-center font-medium hover:text-primary1 lg:mx-4 md:mx-2",
                                                {
                                                    "text-primary1 active": router.asPath === item.href,
                                                    "text-text2": router.asPath !== item.href
                                                }
                                            )
                                        }
                                    >
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </NavLink>
                                ))}
                            </div>
                            <div className="hidden md:space-x-10 md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                {
                                    isLoggedIn ? (
                                        <Link href="/profile" passHref>
                                            <button className="inline-flex items-center px-3 py-2 text-primary1 font-semibold shadow-cardshadow hover:shadow-lg hover:shadow-buttonshadow1 rounded-md">
                                                <div className="bg-background12 p-1 rounded-md mr-2 uppercase">{firstName[0]}{lastName ? lastName[0]: ""}</div>
                                                <span className="capitalize">{firstName}{lastName ? ` ${lastName}`: ""}</span>
                                            </button>
                                        </Link>
                                    ) : (
                                        router.asPath !== "/auth" &&
                                        <Link href="/auth" passHref>
                                            <button className="inline-flex items-center px-8 py-2 border border-transparent text-white font-medium rounded-full bg-primary1 hover:bg-fuchsia-900 shadow-buttonshadow hover:shadow-lg hover:shadow-primary1">
                                                Log In
                                            </button>
                                        </Link>
                                    )
                                }
                            </div>
                        </nav>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="/assets/images/diva-care.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-text2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary1">
                                            <span className="sr-only">Close menu</span>
                                            <MdClose className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <div
                                            key={item.name}
                                            className={
                                                classNames(
                                                    "block px-3 py-2 rounded-md text-base font-medium  hover:text-primary1",
                                                    router.asPath === item.href ? "text-primary1" : "text-gray-700 hover:bg-gray-50"
                                                )
                                            }
                                        >
                                            <Popover.Button>
                                                <Link href={item.href}>
                                                    {item.name}
                                                </Link>
                                            </Popover.Button>
                                        </div>
                                    ))}
                                </div>
                                {
                                    isLoggedIn ? (
                                        <>
                                            {
                                                router.asPath !== "/profile" && (
                                                    <div className="block w-full px-5 py-3 text-center font-medium text-primary1 bg-gray-50 hover:bg-gray-100">
                                                        <Popover.Button>
                                                            <Link href="/profile" passHref>
                                                                <div className="flex items-center">
                                                                    <RiUser3Fill className="mr-2" />My Profile
                                                                </div>
                                                            </Link>
                                                        </Popover.Button>
                                                    </div>
                                                )
                                            }
                                            <div className="block w-full px-5 py-3 text-center font-medium text-primary1 bg-gray-50 hover:bg-gray-100">
                                                <Popover.Button>
                                                    <div className="flex items-center" onClick={handleLogout}>
                                                        <RiLogoutBoxRLine className="mr-2" />Log Out
                                                    </div>
                                                </Popover.Button>
                                            </div>
                                        </>

                                    ) : (
                                        router.asPath !== "/auth" && (
                                            <div className="block w-full px-5 py-3 text-center font-medium text-primary1 bg-gray-50 hover:bg-gray-100">
                                                <Popover.Button>
                                                    <Link href="/auth">
                                                        Log In
                                                    </Link>
                                                </Popover.Button>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </header >
    );
}
