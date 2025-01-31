import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents to dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed'); 
} else {
  console.log('failed');
} // basic test cases

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed'); 
} else {
  console.log('failed');
} // edge cases

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
} // edge cases

if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
} // edge cases

console.log('works with negative numbers');

if (formatCurrency(-2095) === '-20.95') {
  console.log('passed');
} else {
  console.log('failed');
} // edge cases