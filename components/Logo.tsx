import Image from "next/image";
import logo from '../public/logo.png'

const Logo = (props: any) => {
    const { renderDefault, title} = props;
  return (
    <div className="flex items-center space-x-2">
			<Image 
				src={logo}
				alt="logo"
				width={50}
				height={50}
				className="rounded-full object-cover"	
			/>
			<>{renderDefault(props)}</>
		</div>
  )
}

export default Logo