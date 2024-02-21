// 배열
// 방법 1
let numArr :number[] =[1,2,3];
let strArr :string[] = ["hello", "im", "winter"];
 //배열 요소의 타입을 넣어준다.
 //배열임을 알리기 위해 []을 타입으로 넣어준다.

 // 방법2
 let boolArr : Array<boolean> = [true,false, true]

 // 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number|string)[] =[1, "hello"]

//다차원 배열의 타입을 정의하는 벙법
let doubleArr:number[][] =[
    [1,2,3],
    [4,5],
]


//튜플 : 길이와 타입이 고정된 배열
let tup1:[number,number] = [1,2];
//첫번째, 두번째 요소의 타입과 길이를 고정시켜준다.
// tup1=[1,2,3] //튜플 타입의 길이를 넘어서는 배열을 지정할 수 없다.
// tup1 = ["1","2"] //튜플 타입이 맞지 않는 배열도 지정할 수 없다.

let tup2 :[number, string, boolean] = [1,'2',true]
// tup2 = ["2", 1 , true] //순서를 바뀌면 오류 뜸

tup1.push(1);
tup1.pop(); 
//배열이기에 push, pop을 사용할 수 있지만 
//고정된 길이를 넘게 요소를 push해주거나 pop을 해줘도
//오류가 발생하지 않기에 주의해서 사용해야 한다. 

//튜플을 유용하게 사용하는 경우
const users :[string,number][]=[
    ["이정환",1],
    ["라라라",2],
    // [3,'김김김'], -> 이럴 경우 타입이 안맞아서 오류 뜸
]