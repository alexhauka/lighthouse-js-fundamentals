function range(start, end, step) {
  let array = [start];
  if ((start > end) || (step <= 0) || (start === undefined || end === undefined || step === undefined)) {
    array.pop();
    return array;
  }
  while (start < end) {
    start += step;
    array.push((start));
    if (start > end) {
      array.pop();
    }
  } 
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2));