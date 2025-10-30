// hooks/useActiveSection.js
import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';

export const useActiveSection = () => {
  const { setActiveSection, isScrolling } = useNavigation();

  useEffect(() => {
    const sections = ['home', 'menu', 'about', 'book', 'contact'];
    const observers = [];

    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const callback = (entries) => {
      if (isScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [setActiveSection, isScrolling]);
};