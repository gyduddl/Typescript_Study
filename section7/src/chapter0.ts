/**
 * 제레닉 함수
 * 제네릭 함수는 두루두루 모든 타입의 값을 다 적용할 수 있는 그런 범용적인 함수
 */

//제레닉 함수가 필요한 상황
// 인수에 특정 타입의 인수(숫자)를 넣었을때 타입을 저절로 그 (number)타입이 나오도록 설정하고 싶을떄
function func1(value: any) {
    return value;
  }
  
  let num = func1(10);
  // any 타입 -> 인수에 number타입을 넣어줬는데 타입이 number이 아닌 any가 나오고 있음
  
  let str = func1("string");
  // any 타입


  //** 제레닉 함수로 만들어 준다. */
  function func<T>(value: T): T {
    // <T>-> 타입변수 : 타입을 저장하는 변수이다.
    // 매개변수와 반환값의 타입 모도 T로 바꿔준다.
    // <T> 타입 변수에 할당되는 타입은 함수를 호출할때 인수의 타입에 따라 결정된다.
// 그림과 같이 velog에 작성

    return value;
  }

  let num1 = func(10); // number 타입
  
  let str1 = func("string"); // string 타입


  //** 제네릭 함수를 호출할 때 타입 변수에 할당할 타입을 직접 명시하는 것도 가능 */

  function func2<T>(value: T): T {
    return value;
  }
  
  let arr = func2<[number, number, number]>([1, 2, 3]);
  //T에 [Number, Number, Number] 튜플 타입이 할당됨
// 매개변수 value와 반환값 타입이 모두 튜플 타입이 됨
// 그림과 같이 velog에 작성