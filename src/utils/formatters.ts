export const formatMethod = (method: string): string => {
  return method
    .replace(/(public|private|protected)\s+/g, '<span class="text-blue-500">$1</span> ')
    .replace(/(static|final|abstract)\s+/g, '<span class="text-purple-400">$1</span> ')
    .replace(/(\w+)\s*\(/g, '<span class="text-emerald-400">$1</span>(')
    .replace(/\b(void|int|String|boolean|double|float|long|char|byte|short)\b/g, '<span class="text-orange-400">$1</span>')
    .replace(/(\([^)]*\))/g, (match) => {
      return match.replace(/(\w+)(?=\s|,|\))/g, '<span class="text-cyan-400">$1</span>');
    });
};