// 함수에 return값에 붙일수 있는 never type
// 1. 함수가 절대  return 값이 없어야함
// 2. 함수실행이 끝나지 않아야함(endpoint)가 없어야 함

// function 함수():never{
// // Error를 내주면 조건 1 조건 2 충족
//     throw new Error()

// }

// function 함수():never{
//     while(true){
//     }    
// }

// 코딩에서 never 타입 쓰는 법 - 대부분 void로 대체하기에 쓸데는 없다
//  코드를 이상하다 짜면 출몰하긴 함 -> 

// function 함수(parameter:string){
//     if (typeof parameter == 'string'){
//         console.log(parameter)
//     }else{
//         console.log(parameter) //이럴때 파라미터 타입이 never로 변경    
//     }
// }

// let 함수 = function(){
//     throw new Error()
// } // 나오면 이상하다는 것만 이해해주면 됨

