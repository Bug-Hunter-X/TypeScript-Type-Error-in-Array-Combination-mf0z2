# TypeScript Type Error in Array Combination
This example demonstrates a common TypeScript error: type mismatch when combining arrays with different types using the spread syntax.  The function `combineArrays` expects both input arrays to contain only numbers. However, `arr2` contains a string element, which causes a type error.

The solution involves ensuring both input arrays have consistent types and providing type checking to prevent the error.