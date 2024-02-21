/**
 * keyof 연산자
 */


interface Person {
    name: string;
    age: number;
  }
  
  function getPropertyKey(person: Person, key: "name" | "age") {
    return person[key];
  }
  
  const person: Person = {
    name: "이정환",
    age: 27,
  };

  //key의 타입을 “name” | “age”로 정의했는데 이렇게 정의하면 다음과 같이 
  //Person 타입에 새로운 프로퍼티가 추가되거나 수정될 때 마다 이 타입도 계속 바꿔줘야 합니다.

  //**Keyof 연산자를 이용하면 이런 점을 쉽게 해결할 수 있다. 
  interface Person2 {
    name: string;
    age: number;
    location?: string; // 추가
  }
  
  function getPropertyKey2(person2: Person2, key: keyof Person2) {
    return person2[key];
  }
  
  const person2: Person2 = {
    name: "이정환",
    age: 27,
  };

  //keyof 연산자는 위와 같이 keyof 타입 형태로 사용하며 타입의 
  //모든 프로퍼티 key를 String Literal Union 타입으로 추출합니다. 
  //따라서 keyof Person의 결과값은 “name” | “age” | “location”의 유니언 타입이 됩니다.

  //주의!!
//   keyof 연산자는 오직 타입에만 적용할 수 있는 연산자 라는 점 

//오류발생

// (...)

// function getPropertyKey(person: Person, key: keyof person) { // ❌
//   return person[key];
// }

// const person: Person = {
//   name: "이정환",
//   age: 27,
// };



/**
 * Typeof와 Keyof 함께 사용하기
 */

// typeof 연산자는 자바스크립트에서 특정 값의 타입을 문자열로 반환하는 연산자 였습니다. 
//그러나 다음과 같이 타입을 정의할 때 사용하면 특정 변수의 타입을 추론하는 기능도 가지고 있습니다.
 type Person3 = typeof person3; // {name: string, age: number, location:string}
  
//   function getPropertyKey3(person: Person3, key: keyof Person3) {
  function getPropertyKey3(person: Person3, key: keyof typeof person3) { //이런식으로도 사용가능
    return person[key];
  }
  
  const person3= {
    name: "이정환",
    age: 27,
  };


  getPropertyKey3(person, "name")