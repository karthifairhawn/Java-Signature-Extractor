import { useEffect, useState } from 'react';
import type { JavaClassSignature } from '../types';

export const useSignatureWidth = (signature: JavaClassSignature) => {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    // Calculate width based on the longest method signature
    const calculateWidth = () => {
      const baseWidth = 800; // Minimum width
      const charWidth = 7; // Approximate width per character in pixels
      const padding = 200; // Extra padding for margins and spacing

      const longestMethod = signature.methods.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
      }, '');

      const classNameLength = (signature.className || '').length +
        signature.modifiers.join(' ').length;

      const maxLength = Math.max(longestMethod.length, classNameLength);
      const calculatedWidth = (maxLength * charWidth) + padding;

      return Math.max(baseWidth, Math.min(calculatedWidth, 2000)); // Cap at 2000px
    };

    setWidth(calculateWidth());
  }, [signature]);

  return width;
};