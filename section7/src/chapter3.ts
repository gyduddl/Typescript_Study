/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V>{
    //K, V -> 타입변수 (=타입 파라미터, =제네릭 타입 변수, =제네릭 타입 파라미터)
    key : K;
    value : V;
}

let Keypair : KeyPair<string, number> = {
    // 주의할 점
    //제네릭 인터페이스는 제네릭 함수와는 달리 변수의 타입으로 정의할 때 
    //반드시 꺽쇠와 함께 타입 변수에 할당할 타입을 명시해주어야 합니다. 
    key : "key",
    value :0
}
// /그 이유는 제네릭 함수는 매개변수에 제공되는 값의 타입을 기준으로 타입 변수의 
//타입을 추론할 수 있지만 인터페이스는 마땅히 추론할 수 있는 값이 없기 때문입니다.

let KeyPair2 : KeyPair<boolean, string[]>={
    key : true,
    value : ["1"]
}


/**
 * 인덱스 시그니쳐와 함께 사용하기
 */

interface Map<V> {
    [key : string] : V;
}

let stringMap :Map<string> = {
    key : "value"
}

let booleanMap : Map<boolean> = {
    key : true
}


/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    key : V
}

let stringMap2 : Map2<string> = {
    key : "hello"
}

/**
 * 제네릭 인터페이스의 활용 예시
 */

interface Student {
    type: "student";
    school: string;
  }
  
  interface Developer {
    type: "developer";
    skill: string;
  }
  
  interface User {
    name: string;
    profile: Student | Developer;
  }
  
  function goToSchool(user: User) {
    // 타입 좁히기 -> 타입이 Student가 아니면 '잘 못 오셨습니다' 출력
    if (user.profile.type !== "student") {
      console.log("잘 못 오셨습니다");
      return;
    }
  
    // 타입이 student이면 school 출력
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
  }
  
  const developerUser: User = {
    name: "이정환",
    profile: {
      type: "developer",
      skill: "typescript",
    },
  };
  
  const studentUser: User = {
    name: "홍길동",
    profile: {
      type: "student",
      school: "가톨릭대학교",
    },
  };

  // 제네릭 인터페이스로 바꾸기

  interface Student1 {
    type: "student";
    school: string;
  }
  
  interface Developer1 {
    type: "developer";
    skill: string;
  }
  
  interface User1<T> {
    name: string;
    profile: T;
  }
  
  function goToSchool1(user: User1<Student1>) {
    // Student1이 아닌 다른 타입을 넣을 수 없기에 저절로 타입 좁히기가 된다.
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
  }

// goToSchool1(developerUser1)
// 오류 발생
// goToSchool1의 매개변수에 developerUser1을 넣을 수 없기에 오류가 생김
  
  const developerUser1: User1<Developer1> = {
    name: "이정환",
    profile: {
      type: "developer",
      skill: "typescript",
    },
  };
  
  const studentUser1: User1<Student1> = {
    name: "홍길동",
    profile: {
      type: "student",
      school: "가톨릭대학교",
    },
  };