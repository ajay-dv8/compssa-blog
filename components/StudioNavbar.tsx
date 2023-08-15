import Image from 'next/image'
import Link from 'next/link'
import arrowLeftCircle from '../public/arrowLeftCircle.svg'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div>
        <Link href='/' className='text-[#f7ab0a] flex items-center bg-[#1A1A1A] p-3'>
          <Image src={arrowLeftCircle} alt='' className='w-[1.2rem] mx-2 '/>
          Go to Blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar