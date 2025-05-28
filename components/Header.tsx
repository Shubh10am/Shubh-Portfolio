'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-10 ">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={Logo} alt="logo" height={36} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.title}
              href={link.href}
              className="group relative hidden dark:text-gray-100 sm:block"
            >
              <span className="text-gray-900 transition-colors duration-200 ease-in-out dark:text-gray-100">
                {link.title}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gray-700 transition-all duration-300 dark:bg-white ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          )
        })}
        {/* <SearchButton /> */}
        <ThemeSwitch />
        <a
          className="btn hidden rounded-md bg-zinc-700 px-4 py-2 text-white dark:bg-gray-800 sm:block"
          href="https://drive.google.com/file/d/1KapK2G_GYcARH68KD3f94MF-xtKK_k8U/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
