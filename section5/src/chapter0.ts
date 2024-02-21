/**
 * 인터페이스
 * 인터페이스란 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법
 */

interface Person {
    readonly name : string;
    age?:number;

    //#1. 메서드
    // sayhi : () => void //함수 타입 표현식
    // sayHi() :void;  // 호출 시그니쳐

    //#2. 메서드 오버로딩
    //#2-1. 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능하다.
    // (오류 발생)
    // sayHi1: () =>void;
    // sayHi1(a:number, b:number)=> void

    //#2-2. 호출시그니처를 이용해 메서드의 오버로딩 구현이 가능하다.
    sayHi1() : void;
    sayHi1(a:number, b:number) : void;
}

const person: Person ={
    name : "이정환",
    // age : 27

    // sayHi : function(){
    //     console.log("hi")
    // }
    sayHi1 : function(){
        console.log("hi")
    }
}

// person.name = "홍길동" //(오류발생)readeonly 설정도 가능

//메서드 오버로딩
person.sayHi1();
person.sayHi1(1,2);

/**
 * 하이브리드 타입
 */

interface Func2 {
    (a: number): string;
    b: boolean;
  }
  
  const func: Func2 = (a) => "hello";
  func.b = true;


/**
 * 주의할 점
 * 1. 타입 별칭에서는 Union이나 Intersection 타입을 정의할 수 있었던 반면 인터페이스에서는 할 수 없습니다.
 */


//(오류 발생)
// type Type1 = number | string;
// type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// } | number // ❌

//  Union이나 Intersection 타입을 정의 방법
//인터페이스로 만든 타입을 Union 또는 Intersection으로 이용해야 한다면 다음과 같이\
// 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야 합니다.
type Type1 = number | string | Person;
type Type2 = number & string & Person;

// const person: Person & string = {
//   name: "이정환",
//   age: 27,
// };