function mergeSort(array) {
  if (array.length < 2) return array;
  
  else {
    const midPoint = Math.floor(array.length/2);
    let left = array.slice(0, midPoint);
    let right = array.slice(midPoint, array.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  }
}

function merge(leftArray, rightArray) {
  let mergedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      mergedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      mergedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  while (leftArray.length > 0) {
    mergedArray.push(leftArray[0]);
    leftArray.shift();
  }
  while (rightArray.length > 0) {
    mergedArray.push(rightArray[0]);
    rightArray.shift();
  }
  return mergedArray;
}

console.log(mergeSort([-6,-10,2,9,1,100,4]));