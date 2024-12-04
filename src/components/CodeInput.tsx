import React from 'react';
import { FileCode } from 'lucide-react';

interface CodeInputProps {
  code: string;
  onChange: (code: string) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ code, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <FileCode className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Java Class Input</h2>
      </div>
      <div className="relative">
        <textarea
          className="w-full h-[calc(100vh-16rem)] p-6 text-sm font-mono bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-inner"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste your Java class here..."
          spellCheck={false}
        />
        <div className="absolute top-3 right-3 text-xs text-gray-400">
          Java Code
        </div>
      </div>
    </div>
  );
};