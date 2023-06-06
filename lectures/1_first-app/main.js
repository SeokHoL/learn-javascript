console.log('Hello !');
console.log('Hello@@@');
console.log('Hello@@@,', 'world');
console.log('안녕');
// alert('Hello Javascript!');
/*
console.log('Hello !');
console.log('Hello@@@');
console.log('Hello@@@,', 'world');
*/

let number = 'Hello Javascript!';
console.log(number);

function sayHello() {
  console.log('hello1');
  console.log('hello2');
  console.log('hello3');
}
sayHello();
console.log('---------');
sayHello();

let obj = {
  number: 30, //프로퍼티(속성)
  sayHello: function () {
    console.log('obj>hello1');
    console.log('obj>hello2');
    console.log('obj>hello3');
  },
};

console.log(obj.number);
obj.sayHello();
