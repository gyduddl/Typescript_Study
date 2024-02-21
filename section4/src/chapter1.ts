/**
 * 함수 타입 표현식
 * 함수 타입을 타입 별칭과 함께 별도로 정의
 */

// 매개변수와 반환값의 타입을 정의
type Operation = (a: number, b:number) => number;

//함수 타입 표현식은 다음과 같이 여러개의 함수가 동일한 타입을 갖는 경우에 요긴하게 사용됩니다.
const add = (a: number, b: number) => a + b;
const sub = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

//함수 타입 표현식이 반드시 타입 별칭과 함께 사용되어야 하는 것은 아닙니다. 
//다음과 같이 그냥 함수 타입 표현식을 타입 주석에 사용해도 문제는 없습니다.
const add1: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니쳐(콜 시그니처)
 * 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식
 */

type Operation2 = {
    (a:number, b: number) : number;
    //하이브리드 타입
    name: string;
    // 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능합니다.
    //이렇게 할 경우 함수이자 일반 객체를 의미하는 타입으로 정의되며 이를 하이브리드 타입이라고 부릅니다.
}
//자바스크립트에서는 함수도 객체이기 때문에, 위 코드처럼 객체를 정의하듯 함수의 타입을 별도로 정의할 수 있습니다. 

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

//프로퍼티( name: string;)를 추가로 정의하면
// 아래와 같이 함수로도 객체로도 사용할 수 있따.
add2(1, 2);
add.name;