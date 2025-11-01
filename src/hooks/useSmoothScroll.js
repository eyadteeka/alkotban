// hooks/useSmoothScroll.js
import { useCallback, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';

export const useSmoothScroll = () => {
  const { setActiveSection, setIsScrolling } = useNavigation();
  const scrollTimeout = useRef(null);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setIsScrolling(true);
    setActiveSection(sectionId);

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set new timeout
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [setActiveSection, setIsScrolling]);

  return { scrollToSection };
};