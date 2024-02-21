/**
 * 접근제어자
 * 접근 제어자(Access Modifier)는 타입스크립트에서만 제공되는 기능으로
클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능입니다.
 */



/** public : 모든 범위에서 접근 가능 */
class Employee {
    // 필드
    public name: string;  //public을 명시해도 되고 생략해도 됨
    age: number;       // 자동으로 public
    position: string;  // 자동으로 public
  
    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // 메서드
    work() {
      console.log("일함");
    }
  }
  
  const employee = new Employee("이정환", 27, "devloper");
  
  employee.name = "홍길동";
  employee.age = 30;
  employee.position = "디자이너";



  /** private : 클래스 내부에서만 접근 가능 */
  class Employee2 {
    // 필드
    private name: string; // private 접근 제어자 설정
    public age: number;
    public position: string;
  
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
      }
  
    // 메서드
    work() {
      console.log(`${this.name}이 일함`); // 여기서는 접근 가능
    }
  }
  
  const employee2 = new Employee2("이정환", 27, "devloper");
  
//   employee2.name = "홍길동"; // ❌ 오류
  employee2.age = 30;
  employee2.position = "디자이너";


  /**protected : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능 */
  class Employee3 {
    // 필드
    private name: string; // private 접근 제어자 설정
    protected age: number;
    public position: string;
  
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
      }
    // 메서드
    work() {
      console.log(`${this.name}이 일함`); // 여기서는 접근 가능
    }
  }
  
  class ExecutiveOfficer extends Employee3 {
   // 메서드
    func() {
    //   this.name; // ❌ 오류 
      this.age; // ✅ 가능 (파생 클래스 내부에서는 접근 가능)
    }
  }
  
  const employee3 = new Employee3("이정환", 27, "devloper");
  
//   employee3.name = "홍길동"; // ❌ 오류
//   employee3.age = 30; // ❌ 오류
  employee3.position = "디자이너";


  /**필드 생략하기 */

  class Employee4 {
    // 필드
    // private name: string;    // ❌
    // protected age: number;   // ❌
    // public position: string; // ❌
  
    // 생성자
    //생성자 매개변수에 name, age, position 처럼 접근 제어자가 설정되면
    // 자동으로 필드도 함께 선언되고 필드의 값 초기화도 자동으로 한다.
    // 그래서  중복된 필드 선언을 모두 제거해 주어야 하고 'this.필드 = 매개변수'도 생략 가능하다.
    constructor(
      private name: string,
      protected age: number,
      public position: string
    ) {
    //   this.name = name;
    //   this.age = age;
    //   this.position = position;
    }
  
    // 메서드
    work() {
      console.log(`${this.name} 일함`);
    }
  }