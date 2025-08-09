// Footer: Displays copyright text from localization
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization/localization.json';

export default function Footer() {
    const context = useContext(AppContext);
    const l = localization[context.language];

    return (
        <footer className="text-center p-5">
            <p className="text-md md:text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                {l.footerCopyright}
            </p>
        </footer>
    );
}