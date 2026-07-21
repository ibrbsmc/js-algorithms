// Finds the median of two sorted arrays.

function medianOfTwoSortedArrays(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2];

  if (mergedArray.length === 0) {
    throw new Error("Arrays cannot both be empty.");
  }

  mergedArray.sort((a, b) => a - b);

  const len = mergedArray.length;
  const middle = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  }

  return mergedArray[middle];
}

console.log(medianOfTwoSortedArrays([1, 4], [6, 7, 8, 9, 15])); // 7
