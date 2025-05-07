/* 
Promise

js 의 내장 객체
비동기작업을 실행하고 그 결과를 처리하는 코드를 좀 더 편하게 도와줌

비동기작업을 실행시켜주거나
현재의 상태를 관리하거나 결과를 저장하거나
등등 여러개의 작업을 동시에 실행, 다시 실행시켜줌


pending 대기
fulfilled 성공
rejected 실패

*/

const promise = new Promise((resolve, reject) => {
  // 비동기작업을 실행하는 함수
  //executor

  setTimeout(() => {
    console.log('안녕프라미스');
    resolve('');
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

/* 
then 메서드
: 프라미스가 성공했을 때
: 프라미스를 다시 한 번 반환함!!!!!
-> 그래서 then(()=>{}).catch() 가능한 것
-> promise chaning

catch 
: 프라미스 실패했을 때

*/

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아니다');
      }
    }, 3000);
  });

  return promise;
}

const p = add10(5);

p.then((v) => {
  console.log(v);

  return add10(v);
}).then((val) => {
  console.log(val);
});
