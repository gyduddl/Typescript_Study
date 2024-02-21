/**
 * 조건부 타입
 * 조건부 타입은 extends와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법
 */

type A = number extends string ? number : string;
//number extends string은 number 타입이 string 타입의 서브타입이 
//아니기 때문에 거짓이 되고 그 결과 타입 A는 string 타입이 됩니다.

//조건식에 객체 타입
type ObjA = {
    a: number;
  };
  
  type ObjB = {
    a: number;
    b: number;
  };
  
  type B = ObjB extends ObjA ? number : string;
  //B는 ObjB는 ObjA의 서브 타입 이므로 조건식이 참이되어 number 타입이 됩니다.


  /**
   * 제네릭과 조건부 타입
   */

  type StringNumberSwitch<T> = T extends number ? string: number;

  let varA : StringNumberSwitch<number>
//varA는 T에 number 타입을 할당합니다. 그 결과 조건식이 참이 되어 string 타입이 됩니다.

  let varB : StringNumberSwitch<string>
  //varB는 T에 string 타입을 할당합니다. 그 결과 조건식이 거짓이 되어 number 타입이 됩니다.


  /**
   * 예제
   * 이건 나중에 다시 강의를 봐야 할듯.... 넘나 이해가 안되버려...
   */

  // 매개변수로 String 타입의 값을 제공받아 공백을 제거한 다음 반환하는 함수입니다.
  //이때 이 removeSpaces 함수의 매개변수에 undefined이나 null 타입의 값들도 제공될 수 있다고 가정하겠습니다. 
  function removeSpaces(text: string | undefined | null) {
    if (typeof text === "string") {
      return text.replaceAll(" ", "");
    } else {
      return undefined;
    }
  } 
  
  let result = removeSpaces("hi im winterlood");
  // string | undefined