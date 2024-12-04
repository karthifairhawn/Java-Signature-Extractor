import React from 'react';
import { Download, FileSignature } from 'lucide-react';

interface SignatureHeaderProps {
  onDownload: () => void;
}

export const SignatureHeader: React.FC<SignatureHeaderProps> = ({ onDownload }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <FileSignature className="w-4 h-4 text-indigo-600" />
        <h2 className="text-sm font-semibold text-gray-900">Class Signature</h2>
      </div>
      <button
        onClick={onDownload}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors"
      >
        <Download className="w-3.5 h-3.5" />
        Download
      </button>
    </div>
  );
};