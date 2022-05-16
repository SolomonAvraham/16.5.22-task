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
    

}
nineteen();