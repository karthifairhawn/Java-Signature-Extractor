export interface JavaClassSignature {
  className: string;
  methods: string[];
  fields: string[];
  modifiers: string[];
}

export interface Theme {
  id: string;
  name: string;
  background: string;
  text: string;
  border: string;
  modifierColor: string;
  keywordColor: string;
  typeColor: string;
  methodColor: string;
  parameterColor: string;
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleDark: () => void;
};