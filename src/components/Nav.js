import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logoNav from '../images/logoNav.png';
import { useNavigate } from "react-router-dom";

const navigation = [

    { name: 'Inicio', href: '#', current: false },
    { name: 'Menu', href: '#Menu', current: false },
    { name: 'Talleres', href: '#', current: false },
    { name: 'Productos', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Nav() {
    const navigate = useNavigate()
    return (
        <Disclosure as="nav" className="bg-[#FFEFCD] flex justify-center ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 fixed z-[1000] lg:pl-16 pr-8 2xl:pl-0 pr-0">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="bg-transparent absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">

                                <div className="hidden sm:ml-6 z-[1000] sm:block 2xl:ml-1">
                                    <div className="flex space-x-48 sm:space-x-8 md:space-x-14 lg:space-x-[6.5rem] xl:space-x-40 2xl:space-x-[12rem]">
                                        <a class="font-lucida font-[500] text-2xl pt-[4rem] cursor-pointer hover:text-3xl duration-700"  onClick={() => navigate('/Inicio')}>Inicio</a>
                                        <a class="font-lucida font-[500] text-2xl pt-[4rem] cursor-pointer hover:text-3xl duration-700" onClick={() => navigate('/Nosotros')}>Nosotros</a>
                                        <a class="bg-[#E09132] rounded-b-full p-4 pb-20"><img src={logoNav} class="w-[3.5rem] h-auto translate-y-[4rem] pl-[0.5rem] hover:w-[4rem] duration-700" /></a>
                                        <a class="font-lucida font-[500] text-2xl pt-[4rem] cursor-pointer hover:text-3xl duration-700"  onClick={() => navigate('/Talleres')}>Talleres</a>
                                        <a class="font-lucida font-[500] text-2xl pt-[4rem] cursor-pointer hover:text-3xl duration-700"  onClick={() => navigate('/Productos')}>Productos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-transparent text-black' : 'text-black hover:bg-gray-700 hover:text-black',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
