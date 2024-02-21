/** 
 * 제네릭 클래스
 */

class NumberList {
    constructor(private list: number[]){}

    //메서드
    push(data : number) {
        this.list.push(data)
    }
    
    pop(){
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new NumberList([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1,2,4]

// const stringList = new NumberList(["1","2"])
//오류발생. NumberList은 number 타입만 받기에



// 제네릭 클래스로 바꾸기
class List<T> {
    constructor(private list: T[]){}

    //메서드
    push(data : T) {
        this.list.push(data)
    }
    
    pop(){
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList1 = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1,2,4]

const stringList1 = new List(["1","2"]);
stringList1.push("hello")

//클래스는 생성자를 통해 타입 변수의 타입을 추론할 수 있기 때문에 
//생성자에 인수로 전달하는 값이 있을 경우 타입 변수에 할당할 타입을 생략해도 됩니다.

const stringList2 = new List<string>(["1","2"]); //타입 변수에 할당할 타입을 생략가능하다
