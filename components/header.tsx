import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"

  const Header = () => {
    return (
      <div className="
          flex justify-between items-center space-x-2 
          px-10 py-5 sticky top-0 
          backdrop-filter backdrop-blur-xl bg-opacity-30 bg-gray-300

        ">
        <div className="flex items-center space-x-2">
          <Link href='/' className="flex flex-row items-center gap-4 font-semibold ligh">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />      
          <h1>KTU | Compssa</h1>
          </Link>
        </div>

        <div>
          <Link href='contact'>
            <div className="px-4 py-2 
              text-sm md:text-base text-[#3b7ddd] text-center font-semibold
              bg-white shadow-2xl
              flex items-center rounded-md 
              hover:border-[#3b7ddd] hover:border-2
              ">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    )
  }
  
  export default Header;