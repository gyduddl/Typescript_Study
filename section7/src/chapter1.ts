/**제레닉 함수 응용하기 */

/**사례 1 */
//만약 2개의 타입 변수가 필요한 상황이라면 다음과 같이 T, U 처럼 2개의 타입 변수를 사용해도 됩니다.
function swap<T, U>(a: T, b: U) {
    return [b, a];
  }
  
  const [a, b] = swap("1", 2);
//위 코드에서 T는 String 타입으로 U는 Number 타입으로 추론됩니다. 


/**사례 2 */
// 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 한다면 다음과 같이 할 수 있습니다.
function returnFirstValue<T>(data :T){
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);


/**사례 3 */
//튜플 타입과 나머지 파라미터를 이용한 방법 
function returnFirstValue1<T>(data :[T, ...unknown[]]){
    return data[0];
}

let str = returnFirstValue1([1, "hello", "mynameis"]);
//여기서 returnFirstValue1함수에 인수로 number | string 인 유니온 타입을 전달하고 있기에
//str은 number로 타입이 좁혀지는 것이 아닌 number| string 타입으로 나온다.
//data[0]의 타입만 좁히고 싶으며 [T, ...unknown[]] 이런식으로 타입을 설정하여
//data[0]의 타입만 좁힐 수 있다. 나머지 요소의 타입은 …unknown[] 으로 길이도 타입도 상관 없도록 정의합니다.


/**사례 4 */
// 타입 변수를 제한하는 사례
//타입 변수를 제한한다는 것은 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 두는 것을 의미
//타입 변수를 제한할 때에는 확장(extends)을 이용합니다.


function getLength<T extends {length : number}>(data : T){
    return data.length;
}
//T extends { length : number } 라고 정의하면 T는 이제 { length : number } 객체 타입의 서브 타입이 됩니다. 
//이제 T는 무조건 Number 타입의 프로퍼티 length 를 가지고 있는 타입이 되어야 한다는 것 

getLength("123");
//인수로 length 프로퍼티가 존재하는 String 타입의 값을 전달 했으므로 허용됩니다.
getLength([1,2,3]);

getLength({length : 1});

// getLength(undefined) (오류발생) 인수로 undefined을 전달했으므로 오류가 발생합니다.

// getLength(null) (오류발생)