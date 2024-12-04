import React, { useRef } from 'react';
import { Download, FileSignature } from 'lucide-react';
import html2canvas from 'html2canvas';
import type { JavaClassSignature } from '../types';
import { SignatureEditor } from './SignatureEditor';
import { SignatureHeader } from './SignatureHeader';
import { useSignatureWidth } from '../hooks/useSignatureWidth';
import { useTheme } from '../context/ThemeContext';

interface SignatureDisplayProps {
  signature: JavaClassSignature;
}

export const SignatureDisplay: React.FC<SignatureDisplayProps> = ({ signature }) => {
  const signatureRef = useRef<HTMLDivElement>(null);
  const width = useSignatureWidth(signature);
  const { theme, isDark } = useTheme();

  const downloadImage = async () => {
    if (signatureRef.current) {
      const canvas = await html2canvas(signatureRef.current, {
        backgroundColor: isDark ? '#111827' : theme.background,
        width: width + 100,
        height: signatureRef.current.scrollHeight + 40,
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
      });
      const link = document.createElement('a');
      link.download = `${signature.className}_signature.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const bgColor = isDark ? 'bg-gray-900' : theme.background;
  const borderColor = isDark ? 'border-gray-700' : theme.border;

  return (
    <div className="w-full overflow-x-auto">
      <SignatureHeader onDownload={downloadImage} />
      <div 
        ref={signatureRef} 
        className={`p-8 rounded-lg shadow-xl border ${borderColor}`}
        style={{ 
          width: `${width}px`,
          backgroundColor: isDark ? '#111827' : theme.background,
          color: isDark ? '#f3f4f6' : theme.text
        }}
      >
        <SignatureEditor signature={signature} />
      </div>
    </div>
  );
};