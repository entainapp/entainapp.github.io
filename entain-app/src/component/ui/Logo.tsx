import { FC } from "react"
import Image from "next/image"

type Props = {
    logoUrl: string;
}

export const Logo: FC<Props> = (props) => {

    const { logoUrl } = props;

    return (
        <div>
            <Image
                src={logoUrl}
                alt="ENTAIN"
                width={130}
                height={60}
            />
        </div>
    )
}