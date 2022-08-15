import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'


const Header: React.FC = () => (
  <header 
    className="flex z-[9999] bg-transparent justify-around items-center text-center relative w-full my-5"
  >
    <div className="w-auto relative">
      <a href="/">
        <Image
          src="/images/Logo/Black/N4-Enterprises-Black.png"
          alt="N4 Logo"
          width={128}
          height={77}
        />
      </a>
    </div>
    <nav className="sm:ml-8 flex space-x-5 text-center">
      <ul className="flex items-center text-right">
        <li className="ml-10">
          <Link href="/">
            <a className="text-white hover:text-blue-400 uppercase">Home</a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/about">
            <a className="text-white hover:text-blue-400 uppercase">About</a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/services">
            <a className="text-white hover:text-blue-400 uppercase">Services</a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/insights">
            <a className="text-white hover:text-blue-400 uppercase">Insights</a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/contact">
            <a className="text-white hover:text-blue-400 uppercase">Contact</a>
          </Link>
        </li>
        <li className="ml-10">
          <button className="bg-blue-600 py-1.5 px-3 rounded-full text-sm font-semibold text-center uppercase text-white">
            Book now
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
