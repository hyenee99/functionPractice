function hello(name){
  console.log(`안녕하세요! 저는 ${name}입니다.`)
  introduce('서울','수영');
}

const introduce = (region, hobby) => {
  console.log(`저는 ${region}에 살고 있고, 취미는 ${hobby}입니다.`)
} 

hello('홍길동');