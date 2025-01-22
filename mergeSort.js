const a = [3, 2, 1, 13, 8, 5, 0, 1];
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    const leftHalfArray = array.slice(0, splitIndex);
    const rightHalfArray = array.slice(splitIndex);

    const sortedLeft = mergeSort(leftHalfArray);
    const sortedRight = mergeSort(rightHalfArray);
    return merge(sortedLeft, sortedRight);
  }
}
function merge(left, right) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }
  return merged;
}
console.log(mergeSort(a));
