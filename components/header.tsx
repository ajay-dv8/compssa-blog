import Image from "next/image"
import Link from "next/link"
import vercel from "../public/vercel.svg"

  const Header = () => {
    return (
      <div className="flex justify-between items-center space-x-2 px-10 py-5">
        <div className="flex items-center space-x-2">
          <Link href='/'>
            <Image
              src={vercel}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <h1>KTU | Compssa</h1>
        </div>

        <div>
          <div className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7AB0A] flex items-center rounded-full text-center">
            Contact Us
          </div>
        </div>
      </div>
    )
  }
  
  export default Header