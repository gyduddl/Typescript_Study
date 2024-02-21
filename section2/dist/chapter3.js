//object
let userA = {
    id: 1,
    name: '라라라'
};
//타입설정을 object로 해놓으면 id의 value가 어떤 타입인지 알 수 없다.
// userA.id; // 오류 뜸
//객체 리터럴 타입(객체는 이렇게 타입을 설정해주어야햠)
let userB = {
    id: 1,
    name: '라라라'
};
userB.id;
// ts에서 객체는 구조를 기준으로 타입을 정의한다.
// '구조적 타입 시스템(Property Based TS)'이라고 정의한다. 
// c언어나 자바에서는 객체는 이름을 기준으로 타입을 정의한다. 
// '명목적 타입 시스템'이라고 부른다. 
userB = {
    name: '홍길동'
};
let config = {
    apiKey: "MY API KEY"
};
export {};
//  config.apiKey = "hacked"// 오류뜸. readonly를 넣어줘서 객체 값을 바꿀 수 없게 설정
