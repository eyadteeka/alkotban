import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <NavigationContext.Provider value={{
      activeSection,
      setActiveSection,
      isScrolling,
      setIsScrolling
    }}>
      {children}
    </NavigationContext.Provider>
  );
};