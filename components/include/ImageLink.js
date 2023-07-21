import Image from "next/image";
import MotionWrapper from './MotionWrapper';

export default function ImageLink({ href, src, alt }) {
    return (
        <MotionWrapper>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <Image
                    src={src}
                    className="rounded-lg object-cover border-2"
                    width={'100%'}
                    height={'100%'}
                    alt={alt}
                />
            </a>
        </MotionWrapper>
    );
}
