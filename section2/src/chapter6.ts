//any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any =10;
anyVar="hello";

// anyVar= true;
// anyVar={};
// anyVar=()=>{};

// anyVar.toUpperCase();
// anyVar.toFixed();
// any 타입은 어떠한 타입 검사도 받지 않기 때문에 아무 타입의 값이나 
//범용적으로 담아 사용할 수 있고 또 다양한 타입의 메서드도 마음대로 호출해서 사용해도 문제가 되지 않습니다.

let num : number = 10;
num = anyVar;

//any는 최대한 사용하지 마세요
//이 코드를 컴파일 하거나 ts-node로 실행해보면 런타임 오류가 발생합니다.


//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 다르게 오류뜸
// num=unknownVar; 
// unknownVar.toUpperCase();
// unknownVar.toFixed();

//조건문을 이용해 이 값이 number 타입의 값임을 보장해야지 unknown을 사용할 수 있다.
if(typeof unknownVar === "number"){
    // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
    unknownVar*2;
}

//따라서 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 
//정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택이 됩니다.