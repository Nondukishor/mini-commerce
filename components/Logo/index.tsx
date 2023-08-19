import Link from "next/link";
import logo from '../../public/min-commerce.svg'
import Image from 'next/image'
export default function Logo(){
    return(
        <Link href={'/'}>
           <Image src={logo} alt="logo" className="m-5"/>
        </Link>
    )
}