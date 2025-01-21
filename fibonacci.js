function fibs(number) {
  const fibsArray = [];
  for (let i = 0; i < number; i++) {
    if (i <= 1) fibsArray.push(i);
    else fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }
  return fibsArray;
}
// console.log(fibs(1));

function fibsRecursive(number) {
  if (number === 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];
  const previousFibs = fibsRecursive(number - 1);
  const nextFib =
    previousFibs[previousFibs.length - 1] +
    previousFibs[previousFibs.length - 2];
  return [...previousFibs, nextFib];
}
console.log(fibsRecursive(8));
