import MainWrapper from '@/components/include/MainWrapper';
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization/localization.json';

export default function InternalServerError500() {
    const context = useContext(AppContext);
    const l = localization[context.language];

    return (
        <MainWrapper>
            <section>
                <div className="text-center p-10">
                    <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-600 font-semibold tracking-wide dark:text-blue-400 md:text-6xl">{l.errorHeadline}</h2>
                    <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl mb-4">{l.title500}</h3>
                    <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                        {l.subtitle500}
                    </p>
                </div>
            </section>
        </MainWrapper>
    );
}
