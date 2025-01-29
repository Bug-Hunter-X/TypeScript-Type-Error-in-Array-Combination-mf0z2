function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; // Corrected type
const combined = combineArrays(arr1, arr2);
console.log(combined); //No error