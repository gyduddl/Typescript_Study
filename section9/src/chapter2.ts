/**
 * infer
 * infer는 조건부 타입 내에서 특정 타입을 추론하는 문법
 */

type ReturnType2<T> = T extends () => string? string :never;

type Func1 = () => string;
type Func2 = () => number;

type E = ReturnType2<Func1>; // string
// Func1를 ReturnType2의 T에 넣는다. 
// T은 () => string이 된다.
// 참이 되기 떄문에 E는 stirng이 된다.

type F = ReturnType2<Func2>; //never
//Func2를 ReturnType2의 T에 넣는다.
// T은 () => number이 된다. 
// 거짓이 되기 떄문에 F는 never이 된다.



//infer는 다음과 같이 특정 함수 타입에서 반환값의 타입만 추출하는 
// 특수한 조건부 타입인 ReturnType을 만들 때 이용할 수 있습니다.
//조건식 T extends () => infer R에서 infer R은 이 조건식을 참이 
//되도록 만들 수 있는 최적의 R 타입을 추론하라는 의미입니다.
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type A = ReturnType<FuncA>;
// string
// 1. 타입 변수 T에 함수 타입 FuncA가 할당됩니다.
// 2. T는 () ⇒ string 이 됩니다.
// 3. 조건부 타입의 조건식은 다음 형태가 됩니다  () ⇒ string extends () ⇒ infer R ? R : never
// 4. 조건식을 참으로 만드는 R 타입을 추론 합니다 그 결과 R은 string이 됩니다.
// 5. 추론이 가능하면 이 조건식을 참으로 판단합니다 따라서 결과는 string이 됩니다.

type B = ReturnType<FuncB>;
// number

type C = ReturnType<number>;
// 조건식을 만족하는 R추론 불가능
// never



/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R>? R: never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
//number 타입
//Promise<number>를 T에 제공한다. 
//Promise<number>이 Promise<infer R>타입의 서브 타입이 되는 것의 R타입을 추론해라
//R은 number이 되면 된다.

type PromiseB = PromiseUnpack<Promise<string>>;
//string