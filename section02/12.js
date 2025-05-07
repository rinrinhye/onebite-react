function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 5, (v) => console.log(v));

/* 

비동기작업을 하는 함수의 결과값을
이 함수 외부에서 사용하고 싶다면

콜백함수를 사용해서 비동기함수안에서
콜백함수를 호출하도록!!!!!!!!!!!!


*/

// 음식을 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = '삼겹살';
    callback(food);
  }, 3000);
}

orderFood((v) => console.log(v));
