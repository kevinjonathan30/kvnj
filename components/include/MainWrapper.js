import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion'; // Import motion components
import { useInView } from 'react-intersection-observer';
import AppContext from '@/context/AppContext';
import AnchorButton from '@/components/include/AnchorButton';
import Footer from '@/components/Footer';
import Navigation from '../Navigation';
import localization from '@/public/localization/localization.json';

export default function MainWrapper({ children }) {
  const context = useContext(AppContext);
  const router = useRouter();
  const [path, setPath] = useState(null);
  const l = localization[context.language];

  useEffect(() => {
    const currentPath = router.asPath;
    setPath(currentPath);
  }, [router.asPath]);

  const isHome = path === '/';
  const hasQuery = Object.keys(router.query).length === 0;
  const showButton = !isHome && hasQuery;

  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
            <AnchorButton href={'./'} openInNewTab={false}>
              {l.mainWrapperBackToHome}
            </AnchorButton>
          </motion.div>
        )}
        <Footer />
      </main>
    </div>
  );
}
