import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Token {
  type: 'modifier' | 'keyword' | 'type' | 'method' | 'parameter' | 'text';
  value: string;
}

interface SyntaxHighlighterProps {
  code: string;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code }) => {
  const { theme, isDark } = useTheme();

  const getTokenColor = (type: Token['type']): string => {
    if (isDark) {
      switch (type) {
        case 'modifier': return 'text-blue-500';
        case 'keyword': return 'text-purple-400';
        case 'type': return 'text-orange-400';
        case 'method': return 'text-emerald-400';
        case 'parameter': return 'text-cyan-400';
        default: return 'text-gray-300';
      }
    }

    switch (type) {
      case 'modifier': return theme.modifierColor;
      case 'keyword': return theme.keywordColor;
      case 'type': return theme.typeColor;
      case 'method': return theme.methodColor;
      case 'parameter': return theme.parameterColor;
      default: return theme.text;
    }
  };

  const tokenize = (input: string): Token[] => {
    const tokens: Token[] = [];
    let remaining = input;

    const addToken = (type: Token['type'], value: string) => {
      tokens.push({ type, value });
    };

    while (remaining.length > 0) {
      const modifierMatch = remaining.match(/^(public|private|protected|static|final|abstract)\b/);
      if (modifierMatch) {
        const [match] = modifierMatch;
        addToken('modifier', match);
        remaining = remaining.slice(match.length);
        continue;
      }

      const typeMatch = remaining.match(/^(void|int|String|boolean|double|float|long|char|byte|short)\b/);
      if (typeMatch) {
        const [match] = typeMatch;
        addToken('type', match);
        remaining = remaining.slice(match.length);
        continue;
      }

      const methodMatch = remaining.match(/^(\w+)\s*\(/);
      if (methodMatch) {
        const [, name] = methodMatch;
        addToken('method', name);
        addToken('text', '(');
        remaining = remaining.slice(methodMatch[0].length);
        continue;
      }

      const paramMatch = remaining.match(/^(\w+)(?=\s|,|\))/);
      if (paramMatch) {
        const [match] = paramMatch;
        addToken('parameter', match);
        remaining = remaining.slice(match.length);
        continue;
      }

      addToken('text', remaining[0]);
      remaining = remaining.slice(1);
    }

    return tokens;
  };

  const tokens = tokenize(code);

  return (
    <div className="cursor-text">
      {tokens.map((token, index) => (
        <span key={index} style={{ color: getTokenColor(token.type) }}>
          {token.value}
        </span>
      ))}
    </div>
  );
};