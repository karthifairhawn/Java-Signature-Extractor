import React from 'react';

interface SignatureSectionProps {
  title: string;
  items?: string[];
  content?: string;
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ title, items, content }) => {
  if (!items?.length && !content) return null;

  return (
    <div className="border-l-4 border-indigo-100 pl-4 py-2">
      <h3 className="text-sm font-semibold text-indigo-900 mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <div className="font-mono text-sm space-y-1.5">
        {content && <div className="text-gray-800">{content}</div>}
        {items?.map((item, index) => (
          <div key={index} className="text-gray-700 bg-gray-50 p-2 rounded">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};