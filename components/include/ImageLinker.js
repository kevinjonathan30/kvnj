import Image from "next/image";
import MotionLinker from './MotionLinker';

export default function ImageLinker({ href, src, alt }) {
    return (
        <MotionLinker href={href}>
            <Image
                src={src}
                className="object-cover border-2 border-black"
                alt={alt}
            />
        </MotionLinker>
    );
}
