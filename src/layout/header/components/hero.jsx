import { HeroLogo } from "../../../assets/svg/heroLogo"

export const Hero = () => {
    return (
        <div className="   bg-[#000] flex">
            <div className='flex container justify-end'>
                <div className="flex gap-[4px] items-center w-[1220px] justify-center">
                    <h1 className="font-normal text-sm text-[#fff]">Sign up and get 20% off to your first order. </h1>
                    <button className="font-medium underline decoration-transparent text-[#fff]">Sign Up Now</button>
                </div>
                <div className="mb-auto mt-auto hidden sm:block">
                    <HeroLogo />
                </div>
            </div>
        </div>
    )
}