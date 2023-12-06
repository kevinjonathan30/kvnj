import Image from 'next/image';
import AnimatedAnchor from './AnimatedAnchor';
import { MdClose, MdMinimize, MdSkipPrevious, MdSkipNext, MdPlayArrow } from 'react-icons/md';
import profile from '@/public/images/Profile.png';

export default function ProfilePicture() {
    return (
        <div>
            <div className="relative mx-auto flex bg-blue-600 dark:bg-blue-400 w-64 h-8 mt-16 overflow-hidden md:h-8 md:w-72 border-2 border-black border-b-0">
                <div className="my-auto ml-auto mr-2">
                    <MdMinimize />
                </div>
                <div className="my-auto mr-2">
                    <MdClose />
                </div>
            </div>
            <div className="relative mx-auto bg-teal-100 w-64 h-48 overflow-hidden md:h-60 md:w-72 border-2 border-black">
                <Image src={profile} layout="fill" objectFit="cover" alt="profile" />
            </div>
            <div className="relative mx-auto flex bg-blue-600 dark:bg-blue-400 w-64 h-9 mb-20 overflow-hidden md:h-9 md:w-72 border-2 border-black border-t-0">
                <div className="my-auto ml-auto mr-2">
                    <AnimatedAnchor href={"https://www.youtube.com/@kev.journal"}>
                        <MdSkipPrevious />
                    </AnimatedAnchor>
                </div>
                <div className="my-auto mr-2 text-xl">
                    <AnimatedAnchor href={"https://www.youtube.com/@kev.journal"}>
                        <MdPlayArrow className="bg-white rounded-full border-2 border-black" />
                    </AnimatedAnchor>
                </div>
                <div className="my-auto mr-auto">
                    <AnimatedAnchor href={"https://www.youtube.com/@kev.journal"}>
                        <MdSkipNext />
                    </AnimatedAnchor>
                </div>
            </div>
        </div>
    );
}
