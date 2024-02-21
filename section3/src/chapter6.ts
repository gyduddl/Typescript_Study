/**
 * 타입 단언(assertion)
 */

// #1.
type Person = {
    name: string;
    age: number;
  };
  
  let person = {} as Person;
  //빈 객체는 Person 타입이 아니므로 오류가 발생하게 되는데
  //'값 as 타입'으로 특정 값을 원하는 타입으로 단언하여
  //빈 객체를 Person 타입이라고 타입스크립트에게 단언해준다.
  person.name = "";
  person.age = 23; 

//#2.
type Dog = {
    name: string;
    color: string;
  };
  
//   let dog: Dog = {
//     name: "돌돌이",
//     color: "brown",
//     breed: "진도",
//   };
  // 이렇게 변수를 초기화할떄 초기화하는 값을 객체 리터럴을 사용하게 되면
  // '초과 프로퍼티 검사'가 발생하여 오류가 생기게 된다.

  let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  } as Dog

  //breed 라는 초과 프로퍼티가 존재하지만 
  //이 값을 Dog 타입으로 단언하여 초과 프로퍼티 검사를 피해준다.


  /**
   * 타입 단언의 규칙
   * 값 as 단언 <- 단언식
   * A as B
   * -> A가 B의 슈퍼타입이거나
   * -> A가 B의 서브타입이어야 한다.
   */

  let num1 = 10 as never;
  //num1은 A(number 타입)의 값을 B(never) 타입으로 단언합니다. 
  //never 타입은 모든 타입의 서브타입이므로  A가 B의 슈퍼타입입니다.

  let num2 = 10 as unknown;
  //num2는 A(number 타입)의 값을 B(unknown) 타입으로 단언합니다. 
  //unknown 타입은 모든 타입의 슈퍼타입이므로 A가 B의 서브타입입니다.

//let num3 = 10 as string;(오류발생)
//num3는 A(number 타입)의 값을 B(string) 타입으로 단언합니다.
// number 타입과 string 타입은 서로 슈퍼-서브 타입 관계를 갖지 않습니다.
// 단언이 불가능하다.

/**
 * 다중단언
 * -> 좋지 않은 방식
 */

let num3 = 10 as unknown as string;
// number 타입의 값을 unknown 타입으로 단언합니다.
// unknown 타입의 값을 string 타입으로 단언합니다.
//이렇듯 중간에 값을 unknown 타입으로 단언하면 
//unknown 타입은 모든 타입의 슈퍼타입이므로 
//모든 타입으로 또 다시 단언하는게 가능합니다.


/**
 * const 단언
 * -> 타입 단언때에만 사용할 수 있는 const 타입이 존재
 * -> 특정 값을 const 타입으로 단언하면 마치 변수를 
 *    const로 선언한 것 과 비슷하게 타입이 변경
 */

let num4 = 10 as const; //10 Number Literal 타입으로 단언됨

let cat ={
    name : "야옹",
    color:'yellow'
} as const; //모든 프로퍼티가 readonly를 갖도록 단언됨

// cat.name= 'ff' (오류발생)readonly가 되어 프로퍼티 값을 변경 못함


/**
 * Non Null 단언
 * -> 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언할 수 있습니다.
 */

type Post = {
    title: string;
    author?: string;
  };
  
  let post: Post = {
    title: "게시글1",
    author:"라라라"
  };

//   const len :number = post.author?.length;(오류발생)
  // 옵셔널체이닝 
  // post.author.length의 값이 null이나 undefined일 경우
  // null이나 undefined가 나오도록 하는 것
  // 오류가 발생하는 이유
  //옵셔널 체이닝을 사용시 값이 undefined가 나올 수 있는데 
  //타입값을 number로 주었기에 타입 오류 발생

  const len :number = post.author!.length;
  //Non Null 단언을 사용하여 이 값이 undefined이거나 null이 아닐것으로 단언해준다.