/**
 * 인터페이스와 클래스
 */

//인터페이스와 클래스를 같이 사용하는 방법
interface CharacterInterface {
    name : string;
    moveSpeed : number;
    move () : void;
}

class Character implements CharacterInterface{
    constructor(
        //인터페이스로 정의한 필드들은 무조건 public이다.
        public name : string,
        public moveSpeed : number,
        //private를 사용하고 싶다면 인터페이스에 없이 따로 정의해주어야 한다.
        private extra : string
    ){}

    move() : void {
        console.log(`${this.moveSpeed} 속도로 이동!`)
    }
}