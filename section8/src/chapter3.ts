/**
 * 템프릿 리터럴 타입
 * 템플릿 리터럴 타입은 타입 조작 기능들 중 가장 단순한 기능으로
 *  템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입을 만드는 기능입니다.
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
//Color와 Animal은 각각 3개의 String Literal 타입으로 이루어진 Union 타입입니다. 

// type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ... ;
//ColoredAnimal은 Color와 Animal을 조합해 만들 수 있는 모든 가지수의
// String Literal 타입으로 이루어진 Union 타입입니다.

//ColoredAnimal 타입에 추가해야하는 타입이 점점 많아지게 됩니다. 
//이럴 때 바로 템플릿 리터럴 타입을 이용하면 좋습니다.
type ColoredAnimal = `${Color}-${Animal}`;
//type ColoredAnimal ="red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"