import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { sum } from './math.ts';

const paramA = 3;
const paramB = 6;
const value = sum(paramA, paramB);

console.log(`${paramA} + ${paramB} = ${value}`);
console.log(`Randomly generated UUID: ${v4.generate()}`);