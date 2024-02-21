//void(아무것도 없음을 의미하는 타입)

function func1():string{
    return "hello" //문자열을 반환하기에 타입을 string으로
}

function func2() :void{
    console.log("hello")
    //값을 반환하는 것이 아님 출력되고 있다. 
    //아무런 값도 반환하고 있지 않기에 void 타입을 넣어준다.
}

let a : void;

// 타입을 void로 주면 어떠한 값도 넣어줄 수 없다.
//오류뜸
// a = 1;
// a="hello";
// a={}

//오직 undefined만 넣어줄 수 있따.
a= undefined;
// "strictNullChecks": false, 설정시 null도 넣어줄 수 있따.
// a= null;


//never (불가능한 타입)
function func3(): never {
    while (true) {}
  }
//함수 func3는 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없습니다.
//이 함수는 영원히 종료될 수 없기 때문에 뭔가를 반환한다는 것 자체가 '불가능' 합니다.
//이렇게 불가능 한 값의 타입을 정의할 때 never 타입을 사용합니다.

function func4(): never {
    throw new Error();
  }
  //도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의할 수 있습니다.

let b :never;
let anyVar:any;
// 다 오류뜸
// b = 1;
// b="hello";
// b={}
// b= undefined;
// b= null; // "strictNullChecks": false, 설정시에도 null값을 넣어줄 수 없다.
//b=anyVar; // any값도 넣어줄 수 없다.