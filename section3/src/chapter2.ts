// ** Unknown 타입 (전체 집합)
// Unknown 타입은 모든 타입의 슈퍼타입이다.
// 모든 타입은 unknown 타입의 부분집합이다.

function unknownExam(){
    // unknown 타입 변수에는 모든 타입의 값을 할당할 수 있습니다. 
    // 모든 타입은 unknown 타입으로 '업 캐스트' 할 수 있습니다.
    let a: unknown = 1;
    let b: unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e: unknown = undefined;

    let unknownVar:unknown;

    //(오류뜸)unknown은 모든 타입의 다운 케스팅이 안된다. 
    // let num :number = unknownVar;
    // let str : string = unknownVar;
    // let bool : boolean =unknownVar
}

// ** Never 타입(공집합) 
// Never 타입은 모든 타입의 서브타입이다.

function neverExam() {
    function neverFunc(): never{
        while (true) {}
    }

    // never 타입은 모든 타입을 '업케스팅' 할 수 있다.
    let num :number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean =neverFunc();

    // (오류뜸)모든 타입은 never 타입을 '다운케스팅' 할 수 없다.
    // let never1 : never =10;
    // let never2: never ="string";
    // let never3: never = true;
}

//** viod 타입 */

function voidExam() {
    function voidFunc():void{
        console.log("hi");

        return undefined;

        // 반환값을 void로 선언한 함수에서 undefined을 반환 해도 오류가 발생하지 않습니다. 
        //undefined 타입은 void 타입의 서브 타입이므로 업캐스팅이 가능하기 때문입니다.
    }

    //void 타입은 undefined 타입의 슈퍼타입이다.
    let voidVar :void = undefined;
}

//**any 타입 */

//any 타입은 사실상 타입 계층도를 완전히 무시합니다.
//any는 never을 제외하고 모든 타입의 슈퍼타입이 될 수도 있고 모든 타입의 서브 타입이 될 수도 있습니다.

function anyExam() {
    let unknownVar : unknown;
    let anyVar :any;
    let undefinedVar : undefined;
    let neverVar : never;

    anyVar = unknownVar; // 자기(any)한테 오는 다운케스팅도 받고
    undefinedVar = anyVar; //자기(any)가 다운 케스팅하는것도 된다.
    // neverVar=anyVar; // (오류뜸)any는 never타입을 다운 케스팅 할수 없다.    
}