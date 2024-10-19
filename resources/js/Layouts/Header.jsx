import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'

export default function Header() {

    return (
        <Disclosure as="nav" className="bg-white text-[#213262] shadow-xl sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                <div className="flex h-20 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href='/'>
                                <img
                                    alt="Your Company"
                                    src="/image/win-logo.jpg"
                                    width={200}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden flex-col justify-start sm:ml-6 sm:flex mt-3">
                        <div className="flex items-center">
                            <img src="/icon/phone-icon-black.svg" className="h-6 mr-2" alt="Phone icon" />
                            <p className="text-xl font-black">+91 7010737409</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/icon/mail-icon-black.svg" className="w-5 mr-2" alt="Email icon" />
                            <p className="text-xl font-black">tayyappan986@gmail.com</p>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                    <div className="flex items-center justify-center">
                        <img src="/icon/phone-icon-black.svg" className="h-6 mr-2" alt="Phone icon" />
                        <p className="text-xl font-black">+91 7010737409</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/icon/mail-icon-black.svg" className="h-6 mr-2" alt="Email icon" />
                        <p className="text-xl font-black">tayyappan986@gmail.com</p>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

