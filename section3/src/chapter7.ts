/**
 * 타입 좁히기
 * -> 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 *    타입을 상황에 따라 좁히는 방법
 */

function func(value:number|string){
    value; // string|number 타입
    // value.toUpperCase();(오류발생)
    // value.toFixed();(오류발생)
    if(typeof value ==="number"){
        console.log(value.toFixed()) // value->number 타입
    }else if(typeof value === "string"){
        console.log(value.toUpperCase()); //value->string 타입
    }
}

/**
 * 타입 가드
 * -> if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 이런 표현들을 “타입 가드”라고 부른다.
 */


type Person= {
    name :string;
    age:number;
}

function func1(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
    } 
    //오류발생
    // else if (typeof value === "object") {
    //    -> null값에 typeof를 하면 똑같은 object가 나오기에 오류가 발생한다.
    //   console.log(value.getTime());
    // }

    //** 해결방법 : instanceof 타입가드
    // 타입을 좁혀서 Date 타입으로 좁힌다.
    else if (value instanceof Date) {
        console.log(value.getTime());
      }
    
    //*주의 
    //  Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산입니다.
    // 아래와 같은 직접 만든 타입인 Persond은 오류가 생기는 것이다.
    // else if(value instanceof Person){} //오류발생

    //**해결방법 : in 타입 가드 */
    // value라는 값에 age라는 프로퍼티가 존재하는가로 조건문 작성
    // 앞에 'value &&'을 쓴 이유는 value의 값이 null일 수도 있기에
    // value의 값이 존재할때만 조건문이 돌아가게 만듦
    else if(value && "age" in value){ //value는 Person타입으로 좁혀짐
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
  }