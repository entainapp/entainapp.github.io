import { Logo } from "../../Logo"

export const Header = () => {
    return (
        <div className="w-full flex flex-wrap absolute top-0 description px-20 py-5">
            <Logo />
        </div>
    )
}