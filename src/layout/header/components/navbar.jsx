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
                <Link className="flex items-center gap-[4px]" to={'/shop'}>Shop  <ShopIcon /></Link>
                <Link to={'/sale'}>On Sale  </Link>
                <Link to={'/new'}>New Arrivals  </Link>
                <Link to={'/brand'}>Bramds  </Link>
            </ul>
        </section>
    )
}