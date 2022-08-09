import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-blue-900 sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <img
            src="/react-bricks-logo.svg"
            className="w-48"
            alt="N4 Logo"
          />
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/">
              <a className="text-gray-500 hover:text-pink-700">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="text-gray-500 hover:text-pink-700">About</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-500 hover:text-pink-700">Services</a>
            </Link>
            <Link href="/insights">
              <a className="text-gray-500 hover:text-pink-700">Insights</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-500 hover:text-pink-700">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
