// useTheme.js
import { useEffect } from 'react';
import useThemeStore from '../store/themeStore';

const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
