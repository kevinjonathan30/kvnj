import { useContext } from 'react';
import AppContext from '@/context/AppContext';

export default function MainWrapper({ children }) {
    const context = useContext(AppContext);

    return (
        <div className={context.darkMode ? "dark" : ""}>
            <main className="bg-blue-300 px-10 dark:bg-gray-900 min-h-screen md:px-20 lg:px-40">
                {children}
            </main>
        </div>
    );
}