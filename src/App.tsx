import React, { useState } from 'react';
import { CodeInput } from './components/CodeInput';
import { SignatureDisplay } from './components/SignatureDisplay';
import { parseJavaClass } from './utils/javaParser';
import { FileSignature } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeSelector } from './components/ThemeSelector';

function App() {
  const [code, setCode] = useState('');

  const signature = code ? parseJavaClass(code) : {
    className: '',
    methods: [],
    fields: [],
    modifiers: [],
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[2000px] mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileSignature className="w-8 h-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Java Class Signature Generator
                </h1>
              </div>
              <ThemeSelector />
            </div>
          </div>
        </header>

        <main className="max-w-[2000px] mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <CodeInput code={code} onChange={setCode} />
            <SignatureDisplay signature={signature} />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;