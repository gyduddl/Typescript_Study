/**
 * 서로소 유니온 타입(tag 유니온 타입)
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */


//#1. (직관적으로 타입의 형태를 파악하기 어려운 코드)
// type Admin = {
//     name: string;
//     kickCount: number;
//   };
  
//   type Member = {
//     name: string;
//     point: number;
//   };
  
//   type Guest = {
//     name: string;
//     visitCount: number;
//   };
  
//   type User = Admin | Member | Guest;
  
//   // 이렇게 코드를 작성하면 조건식만 보고 어떤 타입으로 좁혀지는지 바로 파악하기가 좀 어렵습니다.
//   // 결과적으로 직관적이지 못한 코드입니다.
//   function login(user: User) {
//     if ("kickCount" in user) { // 이 코드만 봤을 떄 Admin 타입이라는 것을 바로 알기 어렵다. 
//           // Admin
//       console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//     } else if ("point" in user) {
//           // Member
//       console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//     } else {
//           // Guest
//       console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//     }
//   }


//#2. 태그 프로퍼티를 추가
//-> tag값을 같게 되고 string리터럴 타입을 모두 다르게 정의해주었기에 Admin, Member, Guest들은 서로의 교집합이 없는 서로소 집합의 관계를 같게 된다.


type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
  };
  
  type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
  };
  
  type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
  };

  type User = Admin | Member | Guest;
  //-> User은 서로소 집합 관계에 있는 객체 타입들을 묶었기 떄문에 서로소 유니온 타입이 되었다.

  //#2-1
//   function login(user: User) {
//     if (user.tag === "ADMIN") {
//       console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//     } else if (user.tag === "MEMBER") {
//       console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//     } else {
//       console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//     }
//   }

  //#2-2. switch를 이용한 더 직관적인 코드
  function login(user: User){
    switch(user.tag){
        case "ADMIN" :{ // user의 타입이 ADMIN일 경우
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
            break;
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
            break;
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
            break;
        }
    }
  }

  type LoadingTask = {
    state : "LOADING";
  }

  type FailedTask = {
    state : "FAILED";
    error : {
        message : string;
    }
  }

  type SuccessTask = {
    state : "SUCCESS",
    response : {
        data : string;
    }
  }

//#1.
//   type AsyncTask1 = {
//     state : "LOADING" | "FAILED" | "SUCCESS";
//     error ?:{
//         message : string;
//     };
//     response ?:{
//         data : string;
//     }
//   }

//#2. 서로소 유니언 타입
type AsyncTask =LoadingTask | FailedTask | SuccessTask; 

  function processResult(task:AsyncTask) {
    switch(task.state) {
        case "LOADING" :{
            console.log("로딩 중");
            break;
        }
        case "FAILED" : {
            console.log(`에러 발생 : ${task.error.message}`) 
            // 타입을 AsyncTask1로 했을시 타입이 좁혀지지 않아 ?나 !를 사용하지 않으면 오류가 생긴다. 
            // 서로소 유니언 타입인 AsyncTask을 만들었을시 타입이 잘 좁혀져서 오류가 생기지 않는다. 
            break;
        }
        case "SUCCESS":{
            console.log(`성공 : ${task.response.data}`);
            break
        }
        }
  }

  const loading : AsyncTask ={
    state: "LOADING"
  };

  const failed : AsyncTask = {
    state:"FAILED",
    error:{
        message: "오류 발생 원인은 ~~"
    }
  };

  const success : AsyncTask = {
    state : "SUCCESS",
    response:{
        data:"데이터 ~~"
    }
  }


  //동시에 여러가지 상태를 정의해야 하는 객체의 타입을 정의할떄는 
  //선택적 프로퍼티를 사용하는 것보다는 
  //상태에 따라서 타입을 잘게 쪼개서 state, tag같은 프로퍼티를 추가해서 
  //서로소 유니언 타입으로 만들어 주는 것이 좋다.