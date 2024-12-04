export interface JavaClassSignature {
  className: string;
  methods: string[];
  fields: string[];
  modifiers: string[];
}

export const parseJavaClass = (code: string): JavaClassSignature => {
  const signature: JavaClassSignature = {
    className: '',
    methods: [],
    fields: [],
    modifiers: [],
  };

  // Remove comments, newlines, and normalize whitespace
  const cleanCode = code
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')  // Remove comments
    .replace(/\n/g, ' ')                       // Remove newlines
    .replace(/\s+/g, ' ')                      // Normalize whitespace
    .trim();

  // Extract class name and modifiers
  const classMatch = cleanCode.match(/(?:(public|private|protected|static|final|abstract)\s+)*class\s+(\w+)/);
  if (classMatch) {
    signature.className = classMatch[2];
    const modifiersText = cleanCode.slice(0, classMatch.index).trim();
    if (modifiersText) {
      signature.modifiers = modifiersText.split(/\s+/).filter(mod => 
        ['public', 'private', 'protected', 'static', 'final', 'abstract'].includes(mod)
      );
    }
  }

  // Extract methods with single-line formatting
  const methodRegex = /(?:public|private|protected)\s+(?:static\s+)?(?:final\s+)?(?:[\w<>[\],\s]+)\s+(\w+)\s*\([^)]*\)\s*(?:\{|;)/g;
  let methodMatch;
  
  while ((methodMatch = methodRegex.exec(cleanCode)) !== null) {
    let methodText = methodMatch[0]
      .replace(/\{.*$/, '')  // Remove method body
      .replace(/;$/, '')     // Remove trailing semicolon
      .replace(/\s+/g, ' ')  // Normalize spaces
      .trim();
    
    // Skip constructors
    if (!signature.className || methodText.indexOf(signature.className + '(') === -1) {
      // Clean up parameter spacing
      methodText = methodText
        .replace(/\(\s+/g, '(')    // Remove space after opening parenthesis
        .replace(/\s+\)/g, ')')    // Remove space before closing parenthesis
        .replace(/\s*,\s*/g, ', ') // Normalize comma spacing
        .replace(/\s+/g, ' ');     // Final space normalization
      
      signature.methods.push(methodText);
    }
  }

  return signature;
};