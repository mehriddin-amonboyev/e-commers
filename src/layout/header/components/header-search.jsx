import { useSelector } from "react-redux"
import { ProfileIcon } from "../../../assets/svg/profileIcon"
import { SavatIcon } from "../../../assets/svg/savatIcon"
import { SearchIcon } from "../../../assets/svg/searchIcon"
import { Link } from "react-router-dom"

export const HeaderSearch = () => {
    const { productCount } = useSelector((state) => state.product)

    return (
        <div className="flex gap-[40px] justify-end items-center grow">
            <div className="flex grow items-center bg-[#f0f0f0] rounded-[62px] py-[12px] pl-[16px] w-full cursor-pointer">
                <SearchIcon />
                <input className="font-normal text-base text-[rgba(0,0,0,0.4)]  pl-[16px] min-w-0" type="text" placeholder="Search for product..." />
            </div>
            <div className="flex gap-[16px] ml-auto cursor-pointer">
                <Link to={'/cart'}><SavatIcon /></Link>
                <ProfileIcon />
            </div>
        </div>
    )
}