import React, { useState, useEffect } from 'react';
import type { JavaClassSignature } from '../types';
import { SyntaxHighlighter } from './SyntaxHighlighter';

interface SignatureEditorProps {
  signature: JavaClassSignature;
}

export const SignatureEditor: React.FC<SignatureEditorProps> = ({ signature }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [methods, setMethods] = useState(signature.methods);

  useEffect(() => {
    setMethods(signature.methods);
  }, [signature.methods]);

  const handleMethodChange = (index: number, value: string) => {
    const newMethods = [...methods];
    newMethods[index] = value;
    setMethods(newMethods);
  };

  if (!signature.className && methods.length === 0) {
    return (
      <div className="text-gray-400 text-center py-8">
        Enter a valid Java class to generate its signature
      </div>
    );
  }

  return (
    <div 
      className="relative min-h-[200px] w-full"
      onDoubleClick={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
    >
      {/* Class Declaration */}
      <div className="mb-4 border-b border-gray-700/50 pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {signature.modifiers.map((modifier, index) => (
            <span key={index} className="text-blue-400 text-xs">
              {modifier}
            </span>
          ))}
          <span className="text-purple-400 text-xs">class</span>
          <span className="text-yellow-400 font-semibold text-xs">
            {signature.className || 'Untitled'}
          </span>
        </div>
      </div>

      {/* Methods Section */}
      <div className="space-y-2 font-mono text-[11px]">
        {methods.map((method, index) => (
          <div 
            key={index} 
            className="relative group hover:bg-gray-800/50 rounded px-3 py-1 transition-colors"
          >
            {isEditing ? (
              <input
                type="text"
                value={method}
                onChange={(e) => handleMethodChange(index, e.target.value)}
                className="w-full bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-[11px]"
                autoFocus
              />
            ) : (
              <SyntaxHighlighter code={method} />
            )}
          </div>
        ))}
      </div>
      
      {!isEditing && methods.length > 0 && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-gray-400">Double click to edit</span>
        </div>
      )}
    </div>
  );
};