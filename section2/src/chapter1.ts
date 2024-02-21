//number

let num1 : number =123; //타입주석(annotation) 
let num2: number = -123;
let num3: number = 0.123;
let num4:number = -0.123;
let num5:number = Infinity;
let num6:number = -Infinity;
let num7:number = NaN;

// num1="hello"; // 오류 뜸
// num1.toUpperCase(); //문자열 전용 메서드 사용 불가
// num1.toFixed() //숫자열 전용 메스드 사용 가능 

//string
let str1:string = "hello";
let str2:string = 'hello';
let str3:string = `hello`;
let str4:string = `hello ${num1}`

// str1 = 123; //오류 뜸
// str1.toUpperCase(); //문자열 전용 메서드 사용 가능
// str1.toFixed() //숫자열 전용 메스드 사용 불가


//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

// let num :number = null//"strictNullChecks": false으로 인해 사용가능

//리터럴 타입(하나의 값만 가진 타입. 값 그자체가 타입이 되는 것)
let numA :10 =10;
// numA = 12; // 그 값 아닌 다른 값을 가질 수 없다.
let string : "hello" = "hello";
// string = "dff" // 오류뜸
// let bool : true = false; // 오류 뜸