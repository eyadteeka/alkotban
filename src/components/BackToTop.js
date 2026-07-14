import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#home"
      onClick={handleClick}
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
      style={{ display: isVisible ? 'flex' : 'none' }}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default BackToTop;