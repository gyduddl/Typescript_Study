/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것
 * 다음 2가지 기준으로 함수 타입의 호환성을 판단하게 됩니다.
 * 1. 두 함수의 반환값 타입이 호환되는가
 * 2. 두 함수의 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a : A = () => 10; // number
let b : B = () => 10; // number 리터럴

a = b; // number -> number 리터럴 (업케스팅)
// b = a; (오류 발생) number 리터럴 -> number (다운케스팅이여서 안됨)

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
//#1.
type C = (value : number) => void;
type D = (value : 10) => void;

let c : C =(value) => {};
let d : D = (value) => {};

// c = d; (오류 생김) 
d = c;

//#2. 두 함수의 매개변수의 타입이 모두 객체 타입일떄
type Animal = {
    name: string;
  };
  
  type Dog = {
    name: string;
    color: string;
  };
  
  let animalFunc = (animal: Animal) => {
    console.log(animal.name);
  };
  
  let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
  };
  
//   animalFunc = dogFunc; // ❌ //업케스팅이여서 안됨
  dogFunc = animalFunc; // ✅ // 다운케스팅이여서 가능


  //animalFunc = dogFunc를 코드로 표현해보면 다음과 같습니다. 
  let animalFunc1 = (animal: Animal) => {
    console.log(animal.name);  // ✅
    // console.log(animal.color); // ❌
  };
  //animalFunc 타입의 매개변수 타입은 Animal 타입입니다. 
  //dogFunc 함수 내부에서는 name과 color 프로퍼티에 접근합니다.
  // 할당이 이루어지게 되면 animal.color처럼 존재할거라고 보장할 수 없는 프로퍼티에 접근하게 됩니다.


  //dogFunc = animalFunc를 코드로 표현하면 다음과 같습니다.
  let dogFunc1 = (dog: Dog) => {
    console.log(dog.name);
  };
//   dogFunc 함수의 매개변수는 Dog 타입입니다. 
//그리고 animalFunc 함수 내부에서는 name 프로퍼티에만 접근합니다.



// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a:number) => void;

let func1 :Func1 = (a,b) => {};
let func2:Func2 = (a) => {};

//할당하려고 하는 함수의 매개변수 개수가 적을때에만 호환이 된다.
func1 = func2; // 매개변수 2개 <- 1개
// func2 = func1;(오류 발생) 매개변수 1개 <- 2개