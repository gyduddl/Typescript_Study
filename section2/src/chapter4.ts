//타입 별칭 (ts에서 타입을 변수처럼 사용하는 문법)
//공통적으로 반복되는 타입은 이렇게 따로 뺴주어서 사용 가능하다. 
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  };

//   type User = {
//     ...
//   } //이렇게 중복 타입변수여서 사용 못함

  function func() {
    type User = {}; //스코프가 다르기에 타입변수 중복 가능
  }

  let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };
  
  let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };

  //인덱스 시그니처(객체 타입의 정의를 더욱 유연하게 해주는 문법)
  //key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
  type CountryCodes  = {
    [key:string] : string;
  }

  let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
  };


  type CountryNumberCodes  = {
    [key:string] : number; //이 규칙을 위반하지 않으면 오류 안생김
    Korea: number; //무조건 이 요소가 있어야 하면 이렇게 써주면됨
  }

  let countryNumberCodes: CountryNumberCodes= {
    Korea: 141,
    UnitedState: 555,
    UnitedKingdom: 666,
  };

// 잘못된 타입 설정
//인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 합니다.
//   type CountryNumberStringCodes  = {
//     [key:string] : number; 
//     Korea: string; // value 타입이 일치및 호환되지 않아서 오류뜸
//   }

// let countryNumberStriongCodes: CountryNumberCodes= {
//     Korea: 'ko', // 오류뜸
//   };