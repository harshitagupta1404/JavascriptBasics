// getName();
// // console.log(a);
// console.log(getName)

// var a = 7;
// function getName(){
//   console.log('Harshita Hi');
// }

// // var getName = () => {
// //     console.log('Harshita');
// //   }
// console.log(a);
// console.log(window.a);


// // Closures

// function x(){
//   a=7;
//   function y(){
//     console.log(a);
//   }
//   return y;
// }

// z = x();
// console.log(z);
// console.log(a);


// function z(){
//   let b=900;
//   function x(){
//     let a =98;
//     function y(){
//       a=65;
//       console.log(a,b);
//     }
//     y();
//   }
//   x();
// }
// z();

// //print 1-5 in interval of 1sec. Closures + setTimeout using let
// function x(){
//   for (let i =1;i<=5;i++){
//     setTimeout(function(){
//       console.log(i);
//     },i*1000);
//   }
//   console.log('Hello');
// }
// x();


// //print 1-5 in interval of 1sec. Closures + setTimeout using var
function x() {
  for (var i = 1; i <= 5; i++) {
    function a(i){
      setTimeout(function(){
        console.log(i);
      },i*1000);
    }
    a(i);
  }
}
x();



