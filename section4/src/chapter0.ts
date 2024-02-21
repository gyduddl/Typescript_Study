/**
 * 함수 타입 정의
 */

 //* 함수를 설명하는 가장 좋은 방법
 //* 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
 //* 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a :number ,b: number) : number {
    // 반환값의 타입을 정의(타입을 임의로 정의를 안해도 반환값을 기준으로 타입을 추론한다.)
    return a+b
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a:number, b:number) :number => a+b;

/**
 * 함수의 매개변수
 */

//#1.
//(오류발생) 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류가 발생합니다.
// function introduce(name:number = "이정환") {
// 	console.log(`name : ${name}`);
// }

//#2. 
function introduce(name = "이정환") {
    console.log(`name : ${name}`);
  }
  
//   introduce(1); // (오류발생) 기본값과 다른 타입의 값을 인수로 전달해도 오류가 발생합니다.

//#3.
function introduce2(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
  }
  
  introduce2("이정환", 156);
  
  // 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략이 가능합니다.
  introduce2("이정환");


//#4. 
  function introduce3(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        //  tall 같은 선택적 매개변수의 타입은 자동으로 undefined와 유니온 된 타입으로 추론됩니다.
        //tall의 값이 'undefined'가 나올 수 있기 떄문에 number 타입의 값일 거라고 기대하고 사용하려면
        //타입 좁히기를 통해 tall의 값을 number로 만들어주어야 한다.
      console.log(`tall : ${tall + 10}`); 
    }
  }

//#5. 주의할 점은 선택적 매개변수( tall?: number)는 필수 매개변수(name = "이정환"/age: number) 앞에 올 수 없습니다.반드시 뒤에 배치해야 합니다.
//(오류 발생)
// function introduce(name = "이정환", tall?: number, age: number) {
// 	// 오류!
//   console.log(`name : ${name}`);
//   if (typeof tall === "number") {
//     console.log(`tall : ${tall + 10}`);
//   }
// }


/**
 * rest 매개변수
 * rest 매개변수는 나머지 매개변수라고 하며, 스프레드 연산자처럼 기호 ‘...’으로 표기합니다. 
 * rest 매개변수는 함수에 전달한 인수들을 순차적으로 배열에 저장합니다.
 */

//#1.
// function func(...rest) {
//     console.log(rest);
//   }
  
//   func(1, 2, 3, 4); // [1, 2, 3, 4]

//#2. 
// function func(param, ...rest) {
//     console.log(param);
//     console.log(rest);
//   }
  
//   func(1, 2, 3, 4);
  
//   // 1
//   // [2, 3, 4]

//#3. 주의할점
//rest 매개변수는 먼저 선언한 매개변수에 할당된 인수를 제외하고 나머지를 모두 배열에 저장합니다. 
//따라서 반드시 매개변수에서 마지막에 선언되어야 합니다.

// function func(...rest, param) { // 오류 : rest 매개변수는 마지막에 작성해야 합니다.
//     console.log(param);
//     console.log(rest);
//   }
  
//   func(1, 2, 3, 4);


/**
 * rest 매개변수 ts
 */

//#1. 
function getSum(...rest :number[]){
    let sum = 0;
    rest.forEach((it)=>(sum += it));
    return sum;
}

//#2. 만약 나머지 매개변수의 길이를 고정하고 싶다면 다음과 같이 튜플 타입을 이용해도 됩니다.
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }
  
  getSum(1, 2, 3)    // ✅
  getSum(1, 2, 3, 4) // ❌(오류 발생)