/* 
async
: 어떤 함수를 비동기 함수로 만들어주는 키워드
: 함수가 프로미스를 반환하도록 변환해주는 키워드


*/

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'rinrin',
        id: 'hvl2258',
      });
    }, 3000);
  });
}

/* 
async 키워드를 함수 앞에 붙여주면
[함수의 return 값을 결과값으로 갖는
promise 를 반환]하는 함수로 바뀜!!!!!!!!

애초에 promise를 반환하고있는 비동기함수였다면
걍 그대로...


*/

/* 

await
: async 함수 내부에서만 사용이 가능한 키워드
: 비동기 함수가 다 처리되기를 기다리는 역할




*/

async function printData() {
  const data = await getData();

  console.log(data);
}

printData();
