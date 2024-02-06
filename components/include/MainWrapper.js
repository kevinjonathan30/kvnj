import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppContext from '@/context/AppContext';
import Button from '@/components/include/Button';
import Footer from '@/components/Footer';
import Navigation from '../Navigation';

export default function MainWrapper({ children }) {
  const context = useContext(AppContext);
  const router = useRouter();
  const [path, setPath] = useState(null);

  useEffect(() => {
    const currentPath = router.asPath;
    setPath(currentPath);
  }, [router.asPath]);

  const isHome = path === '/';
  const hasQuery = Object.keys(router.query).length === 0;
  const showButton = !isHome && hasQuery;

  return (
    <div className={context.darkMode ? 'dark' : ''}>
      <main className="bg-blue-300 px-10 dark:bg-gray-900 min-h-screen md:px-20 lg:px-40">
        <Navigation />
        {children}
        {showButton && (
          <div className="flex justify-center mt-8">
            <Button href={'./'} openInNewTab={false}>
              Back to Home
            </Button>
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}