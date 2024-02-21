//** 기본 타입간의 호환성 */

// number 타입은 number리터럴 타입의 슈퍼타입이다. 
let num1 : number = 10;
let num2 : 10 = 10;

num1= num2; // number가 number리터럴 타입 다운케스팅하는거는 가능하지만
// num2 = num1 //(오류뜸) number 리터럴 타입이 number 타입을 업케스팅 하는것은 안된다. 



/** 
*객체 타입간의 호환성
*/

// 객체 타입은 프로포티를 기준으로 조건이 적은 객체가 슈퍼타입이 된다.
// Animal은 name과 color 프로퍼티를 갖고
// Dog는 name, color, breed 프로퍼티를 갖는다. 
// 어떤 객체가 Dog 타입에 포함된다면 무조건 Animal 타입에도 포함됩니다.
// 반대로 Animal 타입에 포함되는 모든 객체가 Dog 타입에 포함되는것은 아닙니다.

type Animal = { //슈퍼타입
    name: string;
    color: string;
  };
  
  type Dog = { //서브타입
    name: string;
    color: string;
    breed: string;
  };
  
  let animal: Animal = {
    name: "기린",
    color: "yellow",
  };
  
  let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  };

  animal = dog; //animal은 dog를 넣을 수 있지만(업케스팅)
//   dog = animal; //(오류뜸) dog에는 animal을 넣을 수 없다.(다운케스팅)



//** 초과 프로퍼티 검사 */
  //초과 프로퍼티 검사란? 
  // 이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된
  // 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막습니다.

type Book = {
    name: string;
    price: number;
  };
  
  type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
  };
  
  let book: Book;
  let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
  };

  book = programmingBook;

  //새로운 변수를 만들고 다음과 같이 초기값을 설정하면 오류가 발생
  let book2: Book = { 
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", //(오류발생)
    //Book 타입에 정의되지 않은 skill 프로퍼티를 갖는 객체를 할당하려고
    // 했으므로 초과 프로퍼티 검사가 실패해 오류가 발생
  };



  // 초과 프로퍼티 검사를 피하는 방법
  //#1.
  let book3 : Book = programmingBook;
  // 변수를 초기화 할 때 객체 리터럴을 사용하지만 않으면 발생하지 않습니다. 


  // #2. 
  // 함수의 매개변수에도 타입을 설정할 수 있따.
  function func(book: Book) {}
  //함수의 매개변수에 인수로 값을 전달하는 과정도 변수를 초기화 하는 과정과 동일합니다.
  func({
    name: '한입으로',
    price : 33000,
    // skill : 'react' //초과프로퍼티 검사로 인해 오류발생
  });
  //변수에 미리 값을 담아둔 다음 변수값을 인수로 전달하면 됩니다.
  func(programmingBook);