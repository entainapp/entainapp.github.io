import { Logo } from "../../Logo"

export const Header = () => {
    return (
        <div className="w-full flex flex-wrap justify-between absolute top-0 px-20 py-5">
            <Logo />
        </div>
    )
}