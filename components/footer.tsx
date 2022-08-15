import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex flex-col items-center justify-between h-28">
          <Image
            src="/images/Logo/Black/N4-Enterprises-Black.png"
            alt="N4 Logo"
            width={120}
            height={70}
          />
          <ul className="flex flex-row justify-between w-36">
            <li>
              <img
                src="/images/Icons/facebook-brands.svg"
                alt="FB"
                width={20}
                height={20}
                className="svg"
              />
            </li>
            <li>
              <img
                src="/images/Icons/instagram-brands.svg"
                alt="Insta"
                width={20}
                height={20}
                className="svg"
              />
            </li>
            <li>
              <img
                src="/images/Icons/twitter-brands.svg"
                alt="Twitter"
                width={20}
                height={20}
                className="svg"
              />
            </li>
            <li>
              <img
                src="/images/Icons/youtube-brands.svg"
                alt="YT"
                width={20}
                height={20}
                className="svg"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <nav className="sm:ml-8 flex space-x-5 text-center">
            <ul className="flex items-center text-right">
              <li className="ml-10">
                <Link href="/">
                  <a className="text-white hover:text-blue-400 uppercase">Home</a>
                </Link>
              </li>
              <li className="ml-10">
                <Link href="/about-us">
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
            </ul>
          </nav>
          <div className="text-sm text-right pt-16">
            © {new Date().getFullYear()}{' '}
              N4 Enterprises
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
