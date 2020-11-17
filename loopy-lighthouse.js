for (let num = 100; num < 201; num++) {
  if (num % 3 === 0 && num % 4 !== 0) {
    console.log("Loopy");
  } else if (num % 3 !== 0 && num % 4 === 0) {
    console.log("Lighthouse");
  } else if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else {
    console.log(num);
  }
}