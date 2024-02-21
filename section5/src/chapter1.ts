/**
 * 인터페이스의 확장
 * 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법
 */

//모든 타입에 중복해서 정의 -> 비효율적
// interface Animal {
//     name: string;
//     age: number;
//   }
  
//   interface Dog {
//     name: string;
//     age: number;
//     isBark: boolean;
//   }
  
//   interface Cat {
//     name: string;
//     age: number;
//     isScratch: boolean;
//   }
  
//   interface Chicken {
//     name: string;
//     age: number;
//     isFly: boolean;
//   }


// 인터페이스 확장 기능 이용
//interface 타입이름 extends 확장_할_타입이름 형태로 extends 뒤에 확장할 타입의 이름을 정의하면 해당 타입에 정의된 모든 프로퍼티를 다 가지고 오게 됩니다. 
interface Animal {
    name : string;
    color : string;
}

interface Dog extends Animal {
    //프로퍼티 재정의하기
    name : "lala" //// 타입 재 정의
    //한가지 주의할 점은 프로퍼티를 재 정의할 때 원본 타입을 A 재 정의된 타입을
    //B라고 하면 반드시 A가 B의 슈퍼 타입이 되도록 재정의 해야 합니다.
    // string의 서브 타입인 string 리터럴 타입이여서 가능!
    // name : number, //(오류 발생)
    isBark : boolean
}

interface Cat extends Dog{
    isScratch : boolean
}

interface Chicken extends Cat {
    isFly : boolean
}


const chicken : Chicken = {
    // name : "",
    name : 'lala',
    color : "",
    isBark : true,
    isScratch: false,
    isFly : true,
}

/**
 * 다중 확장
 * 여러개의 인터페이스를 확장하는 것 또한 가능
 */

interface DogCat extends Dog, Cat {};

const dogCat : DogCat= {
    name : "lala",
    color: "",
    isBark :true,
    isScratch:true
}

/**
 * 타입 별칭 확장하기
 *  타입 별칭으로 정의된 객체도 확장할 수 있습니다
 */

type Animal1 = {
    name: string;
    color: string;
  };
  
interface Dog1 extends Animal1 {
    breed: string;
  }