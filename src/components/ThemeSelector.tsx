import React from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../utils/themes';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme, isDark, toggleDark } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Palette className="w-4 h-4 text-gray-600" />
        <select
          value={theme.id}
          onChange={(e) => setTheme(themes.find(t => t.id === e.target.value)!)}
          className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={toggleDark}
        className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-gray-600" />
        ) : (
          <Moon className="w-4 h-4 text-gray-600" />
        )}
      </button>
    </div>
  );
};