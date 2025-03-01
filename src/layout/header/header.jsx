import { HeaderSearch } from "./components/header-search"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"

export const Header = () => {
    return (
        <>
            <Hero />
            <div className="container flex mt-[24px] border-none">
                <Navbar />
                <HeaderSearch />
            </div>
        </>
    )
}