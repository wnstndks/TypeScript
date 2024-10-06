// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// // import {RootState,증가} from './index';
// import { Dispatch } from 'redux';
// // html 리턴 시 타입지정하기
// // let 박스:JSX.Element =<div></div>

// //react에서 redux 쓰는 이유 npm install redux react-redux 로 설치
// // 1. 모든 component가 props없이도 state 공유 가능 
// // 2. state 수정방법을 파일 한 곳에 정의해둠-버그 추적이 쉬움 


// function App() {

//   // 실시간으로 랜더링되는 데이터 -state사용 =>useState는 타입지정 자동으로
//   // let [user, setUser]= useState('kim');
  
//   // return (
//   //   <div>
//   //     <h1>안녕?</h1>
//   //     <Profile name='철수'></Profile>
//   //   </div>
//   // );
//   // redux 에서 가져온 state 남음
//   // const 꺼내온거 = useSelector((state:RootState)=>state);
//   const dispatch:Dispatch= useDispatch();
//   return(
//     <div className='App'>
//       {/* {꺼내온거.counter1.count} */}
//       <button onClick={()=>{dispatch({type:'증가'})}}>버튼</button>
//       {/* 요즘 문법 */}
//       {/* <button onClick={()=>{dispatch(증가())}}>증가범수</button> */}
//     </div>
//   )
// }

// // componet 타입지정 +props 타입지정

// function Profile(props:{name:string}):JSX.Element{
//   return (
//     <div>
//       {props.name}입니다
//     </div>
//   )
// }



// export default App;
