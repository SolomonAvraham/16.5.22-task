function one() {
  var a = 2;
  var b = 4;
  var c = 3;
  var d = 10;
  var sum = a + b + c + d;
  var avg = sum / 4;
  console.log(sum, avg);
}

one();

function two() {
  var width = 15;
  var height = 10;
  var base = width * height;
  console.log(base);
}

two();

function three() {
  var num1 = 5;
  var num2 = 6;
  console.log(num1, num2);
  var helper = num1;
  console.log((num1 = num2), (num2 = helper));
}

three();

// function four() {
//   var a = +prompt("Enter a Number");
//   var b = +prompt("Enter a Number");
//   var c = +prompt("Enter a Number");
//   var d = +prompt("Enter a Number");
//   for (var i = 0; i < 3; i++) {
//     var sum = a + b + c + d;
//     var avg = sum / 4;
//   }
//   console.log(sum, avg);
// }

// four();

// function five() {
//     var width = +prompt("Enter Width:");
//     var height = +prompt("Enter Height:");
//     var base = width * height;
//     console.log(base);
// }

// five();

// function six() {
//     var num1 = +prompt("Enter a Number:");
//     var num2 = +prompt("Enter a Number");
//     var helper = num1;
//     console.log(num1, num2);
//     console.log(num1 = num2, num2 = helper);
// }

// six();

// function seven() {
//     var num1 = +prompt("Enter a Number:");
//     var num2 = +prompt("Enter a Number:");
//     console.log(num1, num2);

// }
// seven();

// function eight() {
//     var num1 = +prompt("Enter a Number:");
//     var num2 = +prompt("Enter a Number:");
//     console.log(num1, num2);
// }

// eight();

function nine() {
  var a1 = "a";
  var a2 = "1";
  console.log(a1, a2);
}

nine();

function ten() {
  var a = true;
  console.log(a);
}
ten();

function eleven() {
  var a;
  var b;
  (a = true) && (b = true);
  console.log(a, b);
  (a = false) && (b = false);
  console.log(a, b);
  (a = true) && (b = false);
  console.log(a, b);
  (a = false) && (b = true);
  console.log(a, b);
}

eleven();

function twelve() {
  var a;
  var b;
  (a = true) || (b = true);
  console.log(a, b);
  (a = false) || (b = false);
  console.log(a, b);
  (a = true) || (b = false);
  console.log(a, b);
  (a = true) || (b = true);
  console.log(a, b);
}

twelve();

// function thirteen() {
//     var a = +prompt("number:");
//     var b = +prompt("number:");
//     var c = +prompt("number:");
//     console.log(a * b * c);

// }
// thirteen();

function fourteen() {
  var first = 7;
  var second = 2;
  var result = first % second;
  console.log(result);
}
fourteen();

// function fifteen() {
//   var num = +prompt("number:");
//   console.log(++num);
// }
// fifteen();

// function sixteen(){
//     var num = +prompt("number:");
//     console.log(num * 3);
// }
// sixteen();

function seventeen() {
  var base = 5 * 5 * 3.14;
  var result = 2 * 3.14 * 5;
  console.log(base, result);
}
seventeen();

function eighteen() {
  var player1 = ["sol", 25];
  var player2 = ["yoni", 35];
  var player3 = ["lony", 15];
  console.log(player1[1] + player2[1] + player3[1] / 3);
  console.log(player1[0], player2[0], player3[0]);
}
eighteen();

function nineteen() {
  var b = 4;
  var d = 4 + b;
  console.log(b, d);
}
nineteen();

// function twenty() {
//   var num = +prompt("number:");
//   if (num > 10) {
//     document.write("greater then 10");
//   }
// }
// twenty();

// function twentyOne() {
//     var num = +prompt("number:")
//     if (num > 10) {
//         console.log("greater then 10");
//     }
//     else if (num < 10) {
//         console.log("less then 10");
//     }
//     else {

//     }
// }
// twentyOne();

// function twentyTwo() {
//     var num = +prompt("number:");
//     if (num > 10) {
//         console.log("greater then 10");
//     }
//     else if (num < 10) {
//         console.log("less then 10");
//     }
//     else {
//         console.log("equal to 10");
//     }
// }
// twentyTwo();

// function twentyThree() {
//   var first = +prompt("first number:");
//   var second = +prompt("second number:");
//   console.log(first <= second);
//   if (first > second) {
//     console.log("first ");
//   } else if (first<second) {
//     console.log("second");
//   } else {
//     console.log("values are equal");
//   }
// }
// twentyThree();

// function twentyFour() {
//   var num = 1;
//   while (num < 101) {
//     console.log(num);
//     num++;
//   }
// }
// twentyFour();

// function twentyFive() {
//   var i = 0;
//   var sum = 0;
//   while (i < 5) {
//     var num = +prompt("Numbers:");
//     sum = num + sum;
//     i++;
//   }
//   console.log(sum,sum/5);
// }
// twentyFive();

function twentySix() {
  var num = 2;
  while (num < 50) {
    if (num % 2 == 0) {
      console.log(num);
    }
    num++;
  }
}
twentySix();

function twentySeven() {
  var num = 1;
  while (num < 50) {
    console.log(num);
    num += 3;
  }
}

// twentySeven();

// function twentyEight() {
//   var num = +prompt("Number:");
//   var sum = 1;
//   while (1 <= num) {
//     sum = num * sum;
//     num--;
//   }
//   console.log(sum);
// }
// twentyEight();

function twentyNine() {
  var i = 1;
  while (i <= 5) {
    var num = +prompt("Number:");
    var max = Number.MAX_SAFE_INTEGER + num;
    var min = Number.MIN_SAFE_INTEGER + num;
    console.log("MAX:" + max, "MIN:" + min);
    i++;
  }
}
twentyNine();
