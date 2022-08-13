import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-5xl mx-auto flex justify-between">
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
        <div className="text-sm">
          © {new Date().getFullYear()}{' '}
            N4 Enterprises
        </div>
      </div>
    </footer>
  )
}

export default Footer
