import path from 'path';
import Queue from './queue';
import Stack from './stack';
import day from './day';

export const sum = (a: number, b: number): number => {
  return a + b;
};
export const minus = (a: number, b: number): number => {
  return a - b;
};
export const getPath = (): string => {
  return path.resolve(__dirname, 'src');
};
export { Queue, Stack, day };
