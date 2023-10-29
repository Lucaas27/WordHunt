/* 
Initial board state. It's an array of arrays - matrix.
Each array has five empty string as starting value - a word has five letters.
Each string will correspond to a letter
Each array will correspond to an attempt
*/

// This creates an array with 6 elements, and for each element, it creates a new array with 5 empty strings
export const boardDefault = Array.from({ length: 6 }, () => new Array(5).fill(""));
