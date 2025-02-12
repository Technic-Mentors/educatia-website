import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Destination', href: '/study-abroad-destinations', current: false },
    { name: 'Blogs', href: '/blog', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <Disclosure as="nav" className="bg-white-800 my-custom-navbar">
        <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-2">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  alt="educatia-study-abroad-consultants"
                  src="/Assets/home-images/Educatia-Logo.png"
                  height={100}
                  width={170}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:ml-6 sm:items-stretch sm:justify-center justify-between flex-1">
              <div className="flex educatia-menu-item space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-[#009E99] text-lg' : 'text-lg font-Inter hover:text-[#009E99]',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Apply Now Button for Desktop */}
            <div className="hidden sm:block">
              <Link href="/contact">
              
              <button
                type="button"
                className="relative rounded-full button2"
                style={{ backgroundColor: 'transparent', border: '1px solid #009E99' }}
              >
                Apply Now
              </button>
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-[#099E99] text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            {/* Apply Now Button for Mobile */}
            <Link href="/contact">
            <DisclosureButton
              as="button"
              className="block w-full rounded-md border px-3 py-2 text-base text-secondary font-medium"
              style={{ border: '1px solid #009E99' }}
            >
              Apply Now
            </DisclosureButton>
            </Link>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

export default Navbar;
