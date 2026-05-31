// MainWrapper: Layout wrapper with navigation, footer, and animated back-to-home button
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import AppContext from '@/context/AppContext';
import Button from '@/components/include/Button';
import Footer from '@/components/Footer';
import Navigation from '../Navigation';
import { useLocalization } from '@/hooks/useLocalization';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MainWrapper({ children }) {
  const context = useContext(AppContext);
  const router = useRouter();
  const [path, setPath] = useState(null);
  const l = useLocalization();
  const { ref, controls } = useScrollAnimation();

  useEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]);

  const isHome = path === '/';
  const hasQuery = Object.keys(router.query).length === 0;
  const showButton = !isHome && hasQuery;

  return (
    <div className={context.darkMode ? 'dark' : ''}>
      <main className="px-10 bg-blue-50 dark:bg-gray-900 min-h-screen md:px-20 lg:px-40">
        <Navigation />
        {children}
        {showButton && (
          <motion.div
            ref={ref}
            className="flex justify-center mt-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <Button href="./" openInNewTab={false}>
              {l.mainWrapperBackToHome}
            </Button>
          </motion.div>
        )}
        <Footer />
      </main>
    </div>
  );
}
