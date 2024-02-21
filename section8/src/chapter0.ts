/**
 * 인덱스드 엑세스 타입
 */


interface Post {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
    };
  }

  //***작성자의 이름과 아이디를 붙여서 출력하는 어떤 함수
  //#1. 
  function printAuthorInfo(author: { id: number; name: string }) {
    // 이럴경우 Post 타입의 author 프로퍼티의 타입의 수정에 따라 함수의 매개변수 타입도 계속 수정해주어야 한다.
    console.log(`${author.id} - ${author.name}`);
  }

  //#2. 인덱스드 엑세스 타입 사용 -> Post타입의 author 프로퍼티가 수정, 추가되어도 따로 수정 안해줘도 된다.
  function printAuthorInfo2(author: Post["author"]) {
    console.log(`${author.id} - ${author.name}`);
  }
    //Post["author"]는 Post 타입으로부터 author 프로퍼티의 타입을 추출합니다. 
    //대괄호 속에 들어가는 String Literal 타입인 “author” (값이 아니라 타입이다.)를 '인덱스' 라고 부릅니다.
    //그래서 인덱스를 이용해 특정 타입에 접근하다고 하여 '인덱스드 엑세스 타입'이라 부릅니다.

    //주의!
    //인덱스에는 타입만 들어올 수 있다. 
    // const authorKey = "author";

    // function printAuthorInfo(author: Post[authorKey]) { // ❌ 오류 발생
    //   console.log(`${author.id} - ${author.name}`);
    // }
    // authorkey는 변수고 값이기에 타입이 아니여서 오류발생한다.

    //주의! 
    // 인덱스에 존재하지 않는 프로퍼티 이름을 쓰면 오류가 발생합니다.
    // function printAuthorInfo(author: Post["what"]) { // ❌ 오류발생
    //     console.log(`${author.id} - ${author.name}`);
    //   }

  // #2-1. 인덱스를 중첩하여 사용할 수도 있습니다.

    //author 타입에서 id값만 가지고 오기 싶을떄
  function printAuthorInfo3(author: Post["author"]['id']) {
	// author 매개변수의 타입은 number 타입이 됨. id의 타입이 number이니깐
  console.log(`${author}`); 
}
  
  const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
      id: 1,
      name: "이정환",
    },
  };



  /**배열 요소의 타입 추출하기 */

  type PostList = {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
      age: number;
    };
  }[];


  // PostList 배열 타입에서 하나의 요소의 타입만 뽑아올 수 있습니다.
  const post3: PostList[number] = {
    //숫자와 관계없이 모두 Number 타입을 넣은 것과 동일하게 동작합니다.
    //배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 됩니다.
    //PostList[number] 에서 [number]을 넣으면 배열의 요소타입을 추출할 수 있다.
    //여기서 [number]은 값이 아니라 타입이다.
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
      id: 1,
      name: "이정환",
      age: 27,
    },
  };


  function printAuthorInfo4(author : PostList[number]["author"]){
    console.log(`${author.name} - ${author.id}`)
  }


  /**
   * 튜플의 요소 타입 추출하기
   * 튜플의 각 요소들의 타입또한 다음과 같이 인덱스드 엑세스 타입으로 쉽게 추출할 수 있습니다.
   */

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

// type Tup3 = Tup[3]; -> 존재하지 않아서 오류 발생

type Tup4 = Tup[number]; // number | string | boolean
//튜플 타입에 인덱스드 엑세스 타입을 사용할 때 인덱스에 
//number 타입을 넣으면 마치 튜플을 배열 처럼 인식해 배열 요소의 타입을 추출하게 됩니다.