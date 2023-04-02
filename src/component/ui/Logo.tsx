import { FC } from "react"
import Image from "next/image"

type Props = {

}

export const Logo: FC<Props> = (props) => {

    return (
        <div>
            <Image
                src="/logo.png"
                alt="ENTAIN"
                width={130}
                height={60}
            />
        </div>
    )
}