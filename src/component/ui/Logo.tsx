import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {

}

export const Logo: FC<Props> = (props) => {

    return (
        <div>
            <Link href="./" >
                <Image
                    src="/logo.png"
                    alt="ENTAIN"
                    width={130}
                    height={60}
                />
            </Link>
        </div>
    )
}