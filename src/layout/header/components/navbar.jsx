import { Link } from "react-router"
import { SiteLogo } from "../../../assets/svg/siteLogo"
import { ShopIcon } from "../../../assets/svg/shopIcon"

export const Navbar = () => {
    return (
        <section className='flex items-center'>
            <Link to={`/`}>
                <SiteLogo />
            </Link>
            <ul className="flex gap-[24px] text-normal text-base text-[#000] py-[13px] px-[40px]">
                <Link className="flex items-center gap-[4px]" to={'/'}>Shop  <ShopIcon /></Link>
                <Link to={'/'}>On Sale  </Link>
                <Link to={'/'}>New Arrivals  </Link>
                <Link to={'/'}>Bramds  </Link>
                <Link to={'/add'}>Add </Link>
            </ul>
        </section >
    )
}