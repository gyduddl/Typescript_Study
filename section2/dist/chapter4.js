//   type User = {
//     ...
//   } //이렇게 중복 타입변수여서 사용 못함
function func() {
}
let user = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 141,
    UnitedState: 555,
    UnitedKingdom: 666,
};
export {};
// 잘못된 타입 설정
//인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 합니다.
//   type CountryNumberStringCodes  = {
//     [key:string] : number; 
//     Korea: string; // value 타입이 일치및 호환되지 않아서 오류뜸
//   }
// let countryNumberStriongCodes: CountryNumberCodes= {
//     Korea: 'ko', // 오류뜸
//   };
