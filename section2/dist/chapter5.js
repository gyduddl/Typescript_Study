//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
//#1
// enum Role {
//     ADMIN, 
//     USER,
//     GUEST,
// }
// 이렇게 숫자를 넣어주지 않아도 순서대로 숫자가 자동으로 할당된다.
//#2
// enum Role {
//     ADMIN = 10, 
//     USER, // 저절로 11
//     GUEST, // 12가 할당된다.
// }
//#3
// enum Role {
//     ADMIN,  // 0이 할당
//     USER=10,
//     GUEST, //11이 할당
// }
const user1 = {
    name: "이정환",
    role: Role.ADMIN, //관리자
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 회원
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
};
console.log(user1, user2, user3); //{ name: '이정환', role: 0 } { name: '홍길동', role: 1 } { name: '아무개', role: 2 }
// 문자열 enum 
var Language;
(function (Language) {
    Language["korea"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user4 = {
    name: "이정환",
    role: Role.ADMIN,
    language: Language.korea
};
console.log(user4);
export {};
