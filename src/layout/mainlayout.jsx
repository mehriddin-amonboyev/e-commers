import { Outlet } from "react-router-dom"
import { Header } from "./header/header"

export const MainLayout = () => {
    return (
        < div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>
            <Outlet />
            <footer>
                footer
            </footer>
        </div>
    )
}