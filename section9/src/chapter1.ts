/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; //string

let b: StringNumberSwitch<string>; //number

let c: StringNumberSwitch<number | string>; // string | number
// 변수 c는 string | number 타입으로 정의된다.
//그 이유는 조건부 타입의 타입 변수에 Union 타입을 할당하면 
//분산적인 조건부 타입으로 조건부 타입이 업그레이드 되기 때문입니다. 



/**
 * 분산적인 조건부 타입은 다음과 같이 동작합니다.
 * 타입 변수에 할당한 Union 타입 내부의 모든 타입이 분리됩니다. 
 * 따라서 StringNuberSwitch<number | string> 타입은 다음과 같이 분산됩니다.
 * -> StringNumberSwitch<number>
 * -> StringNumberSwitch<string>
 * 그리고 다음으로 분산된 각 타입의 결과를 모아 다시 Union 타입으로 묶습니다.
 * -> 결과 : number | string
*/


/**
 * Exclude 조건부 타입 구현하기(예제)
 */
//Union 타입으로부터 특정 타입만 제거하는 Exclude(제외하다) 타입을 다음과 같이 정의할 수 있습니다. 


type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1. Union 타입이 분리된다.(분산)
// * Exclude<number, string>
// * Exclude<string, string>
// * Exclude<boolean, string>

// 2. 각 분리된 타입을 모두 계산한다.
// * T = number, U = string 일 때 number extends string 은 거짓이므로 결과는 number
// * T = string, U = string 일 때 string extends string 은 참이므로 결과는 never
// * T = boolean, U = string 일 때 boolean extends string 은 거짓이므로 결과는 boolean

// 3. 계산된 타입들을 모두 Union으로 묶는다
// * 결과 :  number | never | boolean

//그런데 여기서 공집합을 의미하는 never 타입은 Union으로 묶일 경우 사라집니다.
//그 이유는 공집합과 어떤 집합의 합집합은 그냥 원본 집합이 되기 때문입니다.

//따라서 최종적으로 타입 A는 number | boolean 타입이 됩니다. 
// 결과적으로 number | string | boolean에서 string 타입만 제거하였다.


/** Extract(특정 타입만 남도록 하는 것) */

type Extract<T, U> = T extends U? T : never;

type B = Extract<number|string | boolean ,string> // string 타입

//1단계
// * Exclude<number, string>
// * Exclude<string, string>
// * Exclude<boolean, string>

//2단계
// never 
// string
// never
// ---> never|string|never

//결과
//stirng


/**
 * 분산을 막는 방법
 * extends 양옆에 []를 씌어주면 된다.
 */

type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let e: StringNumberSwitch2<number | string | boolean>; //number