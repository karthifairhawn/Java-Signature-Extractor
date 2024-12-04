import React, { createContext, useContext, useState } from 'react';
import { Theme, ThemeContextType } from '../types';
import { themes } from '../utils/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes[0]);
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};