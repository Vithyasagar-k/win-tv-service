import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {

    return (
        <Disclosure as="nav" className="bg-[rgb(2,0,36)] text-white shadow sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="/image/logo.png"
                                className="w-32"
                            />
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <p className="flex items-center text-lg font-semibold">
                            <img src="/icon/phone.svg" className="w-8 mr-1" alt="Phone icon" /> +91 7010737409
                        </p>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <p className="flex items-center text-lg font-semibold">
                            <img src="/icon/email.svg" className="w-5 mr-3" alt="Email icon" /> tayyappan986@gmil.com
                        </p>
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
                    <p className="flex items-center text-lg font-semibold">
                        <img src="/icon/phone.svg" className="w-8 mr-1" alt="Phone icon" /> +91 7010737409
                    </p>
                    <p className="flex items-center text-lg font-semibold">
                        <img src="/icon/email.svg" className="w-5 mr-3" alt="Email icon" /> tayyappan986@gmil.com
                    </p>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

