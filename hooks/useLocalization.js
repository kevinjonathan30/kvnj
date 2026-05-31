import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization/localization.json';

/**
 * Custom hook to get localized strings based on current language
 * @returns {Object} Localization object for current language
 */
export function useLocalization() {
  const context = useContext(AppContext);
  return localization[context.language];
}
