/**
 * 클래스
 */

let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study() {
      console.log("열심히 공부 함");
    },
    introduce() {
      console.log("안녕하세요!");
    },
  };
  
  let studentB = {
    name: "홍길동",
    grade: "A+",
    age: 27,
    study() {
      console.log("열심히 공부 함");
    },
    introduce() {
      console.log("안녕하세요!");
    },
  };

  // 위의 중복된 코드를 해결할 클래스 문법 사용하기
class Student {
    //필드
    // 필드란 이 클래스가 생성할 객체가 갖는 프로퍼티를 의미합니다
    name;
    age;
    grade

    //** 생성자 선언
    //생성자는 특수한 메서드로 실질적으로 객체를 생성하는 함수입니다. 
    //생성자에서는 매개변수로 프로퍼티 값을 받아 this.프로퍼티의 값으로 할당합니다.
    constructor(name, grade, age){
        //this는 객체이며 현재 만들고 있는 객체를 의미합니다
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    //이 생성자 메서드는 현재 만들고 있는 객체의 name, grade, age 프로퍼티의 값을 
    //매개변수로 전달받은 값으로 설정하는 역할을 합니다.

    // ** 메서드
    study() {
        console.log("열심히 공부 함");
      }
    
      introduce() {
        // this 활용하기
        console.log(`안녕하세요! ${this.name} 입니다.`);
      }
}

//이 클래스를 호출하여 객체를 생성('인스턴스'라고 부른다)
// Student클래스를 이용해서 만들었으니 'Student 인스턴스'라고 부른다.
const studentC = new Student("홍길동", "A+", 27);
//클래스를 이용해 새로운 객체를 생성할 때에는 new 클래스이름 형태로 클래스의 생성자 함수(constructor...)를 호출합니다.
// 이때 인수로는 각각 name, grade, age를 전달합니다. 

console.log(studentC);
// Student { name: '홍길동', age: 27, grade: 'A+' }

// 함수를 호출할 수 있다.
studentC.study(); // 열심히 공부 함
studentC.introduce(); // 안녕하세요! 이정환 입니다.


/**
 * 상속
 * 앞서 만든 Student 클래스를 기반으로 추가적인 필드와 메서드를 갖는 클래스를 선언하고 싶다면 상속을 하면 된다.
 */

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;
  
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
      super(name, grade, age); // 부모 클래스의 생성자를 호출해주기
      this.favoriteSkill = favoriteSkill;
    }
  
    // 메서드
    programming() {
      console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
  }

  //이때 StudentDeveloper 클래스에서 Student 클래스의 생성자를 함께 호출해줘야 합니다. 
  //super메서드를 호출하고 인수로 name, grade, age를 전달하면 슈퍼 클래스(확장 대상 클래스)의 생성자를 호출합니다. 