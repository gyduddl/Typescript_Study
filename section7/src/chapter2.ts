/**
 * map 메서드
 */

const arr = [1,2,3];
const newArr = arr.map((it)=> it*2);
// newArr의 타입 number[]


function map<T>(arr: T[], callback: (item: T) => T)  {
    let result: T[] = []; // 여기다가 T[] 타입을 넣어줘야....
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }

map(arr, (it)=> it*2); // arr 타입 : number[], it : number 타입

// map(arr, (it)=> it.toString()) //오류발생
//첫번째 인수로 arr을 전달했을 때 타입 변수 T에는 number 타입이 할당되었기 때문에 
//콜백 함수의 반환값 타입도 number 타입이 되어야 하기 때문입니다. 
// map 메서드는 이렇게 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야 합니다. 


/** 수정 */
//원본 배열의 타입과 새롭게 반환하는 배열의 타입을 다르게 설정해 주었습니다. 
function map1<T,U>(arr: T[], callback: (item: T) => U)  {
    let result: U[] = []; // 여기다가 T[] 타입을 넣어줘야....
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }

console.log(map1(arr, (it)=> it.toString())) 
// 결과값 : [ '1', '2', '3' ]
// string[] 타입의 배열을 반환


/**forEach 메서드 타입 */

const arr2 = [1, 2, 3];

arr2.forEach((it) => console.log(it));
// 출력 : 1, 2, 3


function forEach<T>(arr:T[], callback:(item:T)=> void){
    //forEach문은 아무것도 반환하지 않으니 반환값의 타입을 void로 설정해도 된다.
    for(let i =0; i < arr.length; i++){
        callback(arr[i])
    }
}

forEach(arr2, (it)=>{
    console.log(it.toFixed())
})

forEach(['123','456'], (it)=>{
    it;
})