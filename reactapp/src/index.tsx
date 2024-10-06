// import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';


// // (신규방식 redux) state와 reducer 만들 때 타입지정 필요  
// // 신식 redux를 사용하고 싶으면 redux, react-redux에 이어서 
// // npm install @reduxjs/toolkit

// const 초기값 = { count: 0, user : 'kim' };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState : 초기값,
//   reducers: {
//     증가 (state){
//       state.count += 1
//     },
//     감소 (state){
//       state.count -= 1
//     },
//     맘대로증가 (state, action :PayloadAction<number>){
//       state.count += action.payload
//     }
//   }
// })

// let store = configureStore({
//   reducer: {
//     counter1 : counterSlice.reducer
//   }
// })

// //state 타입을 export 해두는건데 나중에 쓸 데가 있음
// export type RootState = ReturnType<typeof store.getState>

// //수정방법 만든거 export
// export let {증가, 감소, 맘대로증가} = counterSlice.actions