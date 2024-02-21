/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */


let a: string | number; 
// a는 string타입도 되고 number 타입도 되는 string number Union 타입이다.
a= 1;
a="hello"

let arr : (number |string|boolean)[] = [1, "hello",true]



type Dog = {
    name : string;
    color : string
}

type Person ={
    name : string;
    language : string;
}

type Union1 = Dog | Person; // Dog타입과 Preson타입을 갖는 Union 타입 만들어주기

let union1:Union1={  
    name : "",
    color : ""
}
//union1은 Dog 타입에는 포함이 되지만 Person타입에는 포함이 안된다.
//Dog의 요소만 가지고 있기에

let union2 : Union1={
    name : "",
    language: ""
}
//union2은 Dog 타입에는 포함이 안되지만 Person타입에는 포함이 된다.


let union3:Union1= { //Dog, Person 두개의 타입을 가짐
    name : "",
    color: "",
    language : ""
}
//union3은 Dog 타입에도 포함이 되고 Person타입에도 포함이 된다. 

//(오류 발생) Dog랑 Person 모두가 가지는 요소인 name만 넣었을시

// let union4 : Union1={
//     name: "", 
// }

//union4는 name은 있지만 color가 없기에 Dog 타입에도 포함이 안되고
//language가 없기에 Person타입에도 포함이 안된다.


/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable :number& string
//number 타입과 string 타입은 서로 교집합을 공유하지 않는 서로소 집합이므로 
//변수 variable의 타입은 결국 never 타입으로 추론됩니다.

type Cat = {
    name: string;
    color: string;
  };
  
  type Man = {
    name: string;
    language: string;
  };
  
  type Intersection = Cat & Man;
  
  let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
  };

  //(오류발생)이렇게 name, color, language중 하나라도 빠지면 오류생긴다.
//   let intersection2: Intersection = {
//     name: "",
//     color: "",
//   };

/**
 * 교집합은 Cat타입과 Man 타입에 있는 모든 프로퍼티를 가지고 있는 객체만
 * 교집합 타입으로 포함될 수 있다. 
 */