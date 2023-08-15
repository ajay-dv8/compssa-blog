import Image from "next/image";
import next from '../public/next.svg'

const Logo = (props: any) => {
    const { renderDefault, title} = props;
  return (
    <div className="flex items-center space-x-2">
			<Image 
				src={next}
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