/**
 * 타입스크립트의 클래스
 */

class Employee1 {
    // 필드
    //추가로 생성자 함수가 없으면  초기값도 함께 명시해주어야 합니다.
    name: string = "";
    age: number = 0;
    position: string = "";
  
    // 메서드
    work() {
      console.log("일함");
    }
  }

class Employee2 {
    //필드  
    //생성자 함수에서 필드의 값들을 잘 초기화 해 준다면 필드 선언시의 초기값은 생략해도 됩니다.
    name :string;
    age : number;
    position :string;

    //생성자
    constructor(name:string, age: number, position:string){
        this.name =name;
        this.age = age;
        this.position = position;
    }

    //메서드
    work() {
        console.log("일함");
      }
}

const employeeB = new Employee2('라라라', 27 , "개발자");
console.log(employeeB) //{ name: '라라라', age: 27, position: '개발자' }


/**
 * 클래스는 타입입니다.
 * 클래스를 타입으로 사용하면 해당 클래스가 생성하는 객체의 타입과 동일한 타입이 됩니다.
 */

const employeeC :Employee2 = {
    name : "",
    age : 0,
    position: '',
    work(){},
}

/**
 * 상속
 */

class Executive extends Employee2 {
    //필드
    officeNumber : number;

    //생성자
    constructor(
        name : string,
        age : number,
        position : string,
        officeNumber : number
    ){
        super(name, age, position);
        this.officeNumber = officeNumber
    }
}