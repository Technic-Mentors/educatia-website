import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About Us', href: '/about', current: false },
        { name: 'Services', href: '/services', current: false },
        { name: 'Destination', href: '/', current: false },
        { name: 'Blogs', href: '/', current: false },
        { name: 'Contact Us', href: '/', current: false },
      ]

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <>
      <Disclosure as="nav" className="bg-white-800 my-custom-navbar">
      <div className="mx-auto max-w-7xl px-2  py-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <Link href="/">          
              <Image
                alt="educatia-study-abroad-consultants"
                src="/Assets/home-images/Educatia-Logo.png"
                height={100}
                width={170}
              />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex educatia-menu-item space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-dark text-lg' : 'text-lg font-Inter  hover:text-secondary',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full button2"
              style={{ backgroundColor: 'transparent', border: '1px solid #009E99' }}
            >
              Apply Now
            </button>

            {/* Profile dropdown */}
            
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
  )
}

export default Navbar
