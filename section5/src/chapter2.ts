/**
 * 선언 합침
 * 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능합니다.
 * 중복된 이름의 인터페이스 선언은 결국 모두 하나로 합쳐지기 때문입니다.
 * 동일한 이름의 인터페이스들이 합쳐지는 것을 선언 합침(Declaration Merging)이라고 부릅니다.
 */

interface Person {
    name: string;
  }
  
  interface Person {
    age: number;
  }

  interface Person {
	name: string;
	age: number;
}

//주의할점 
interface Person1 {
    name: string;
  }
  
  interface Person1 {
    //동일한 프로퍼티의 타입을 다르게 정의한 상황을 ‘충돌’ 이라고 표현하며 
    //선언 합침에서 이런 충돌은 허용되지 않습니다.
    // name: number; 오류발생
    //동일한 프로퍼티를 사용하려면 타입도 같아야 한다.
    name : string,
    age: number;
  }