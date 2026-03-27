// function calc() {
//   var count = 0;
// console.log(count)
//   return {
//     inc: function() {
//       count++;
//       console.log(count);
//     },
//     dec: function() {
//       count--;
//       console.log(count);
//     },
//     reset: function() {
//       count = 0;
//       console.log(count);
//     }
//   };
// }

// var result = calc();

// result.inc();   // 1
// result.inc();   // 2
// result.dec();   // 1
// result.reset(); // 0

// result.inc();   // 1
// result.inc();   // 1
// result.inc();   // 1
// result.inc();   // 1
// result.inc();   // 1
// result.inc();   // 1
// result.dec();   // 1
// result.dec();   // 1
// result.reset(); // 0

// calc()

function calc() {
  let calcinc = 0;
//   let calcdec = 0;
//   let reset = 0;
  return function inner() {
    ++calcinc;
    console.log(calcinc);
  };
}
var result = calc();
// result();
// result();
