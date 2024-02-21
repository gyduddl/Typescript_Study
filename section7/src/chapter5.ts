/**
 * 프로미스(Promise)
 * Promise는 제네릭 클래스로 구현되어 있습니다.
 */


const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20);
        reject("실패")
    },3000)
})

promise.then((response)=> {
    //response는 number 타입
    console.log(response * 10) 
})

// reject 함수에 인수로 전달하는 값 즉 실패의 결과값 타입은 정의할 수 없습니다.
// 그냥 unknown 타입으로 고정되어 있기 때문에 catch 메서드에서 사용하려면 
//타입 좁히기를 통해 안전하게 사용하는걸 권장합니다.
promise.catch((err)=>{
    if(typeof err === "string"){
        console.log(err)
    }
})


/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */


interface Post {
    id : number;
    title: string;
    content : string;
}

function fetchPost() : Promise<Post>{ //#방법1. 반환값에 타입을 설정해주는 방법(더 직관적인 방법)
    // Promise가 클래스이기 때문에 타입으로도 쓸 수 있다.
    return new Promise<Post>((resolve,reject)=>{ //#방법2. 여기다가 직접 타입 설정해주는 방법
        setTimeout(()=>{
            resolve({
                id:1,
                title: "게시글 제목",
                content : "게시글 컨텐츠"
            })
        }, 3000)
    })
}


const postRequest = fetchPost();

postRequest.then((post)=> {
    post.id; // 타입을 설정해주지 않을경우 unknown이 나온다.
})