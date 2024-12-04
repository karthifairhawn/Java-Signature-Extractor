import { Theme } from '../types';

export const themes: Theme[] = [
  {
    id: 'monokai',
    name: 'Monokai',
    background: '#272822',
    text: '#F8F8F2',
    border: '#3E3D32',
    modifierColor: '#66D9EF',
    keywordColor: '#F92672',
    typeColor: '#A6E22E',
    methodColor: '#FD971F',
    parameterColor: '#AE81FF'
  },
  {
    id: 'github',
    name: 'GitHub',
    background: '#ffffff',
    text: '#24292e',
    border: '#e1e4e8',
    modifierColor: '#d73a49',
    keywordColor: '#d73a49',
    typeColor: '#005cc5',
    methodColor: '#6f42c1',
    parameterColor: '#24292e'
  },
  {
    id: 'dracula',
    name: 'Dracula',
    background: '#282a36',
    text: '#f8f8f2',
    border: '#44475a',
    modifierColor: '#ff79c6',
    keywordColor: '#ff79c6',
    typeColor: '#8be9fd',
    methodColor: '#50fa7b',
    parameterColor: '#f1fa8c'
  },
  {
    id: 'nord',
    name: 'Nord',
    background: '#2e3440',
    text: '#d8dee9',
    border: '#3b4252',
    modifierColor: '#81a1c1',
    keywordColor: '#b48ead',
    typeColor: '#8fbcbb',
    methodColor: '#88c0d0',
    parameterColor: '#a3be8c'
  }
];