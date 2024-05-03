console.log("merge sort: recursive");

function mergeSort(arr) {
    // Base case: single-element array is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array in half
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare and add elements from each half
    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
      if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
        mergedArr.push(sortedLeft[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(sortedRight[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add any remaining elements from either half
    mergedArr.push(...sortedLeft.slice(leftIndex));
    mergedArr.push(...sortedRight.slice(rightIndex));
  
    return mergedArr;
  }
  
  // Example usage
  const numbers = [6, 4, 2, 8, 1, 3, 9, 5];
  const sortedNumbers = mergeSort(numbers);
  console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6, 8, 9]
  