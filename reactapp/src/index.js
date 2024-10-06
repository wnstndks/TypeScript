"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.맘대로증가 = exports.감소 = exports.증가 = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// (신규방식 redux) state와 reducer 만들 때 타입지정 필요  
// 신식 redux를 사용하고 싶으면 redux, react-redux에 이어서 
// npm install @reduxjs/toolkit
var 초기값 = { count: 0, user: 'kim' };
var counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: 초기값,
    reducers: {
        증가: function (state) {
            state.count += 1;
        },
        감소: function (state) {
            state.count -= 1;
        },
        맘대로증가: function (state, action) {
            state.count += action.payload;
        }
    }
});
var store = (0, toolkit_1.configureStore)({
    reducer: {
        counter1: counterSlice.reducer
    }
});
//수정방법 만든거 export
exports.증가 = (_a = counterSlice.actions, _a.증가), exports.감소 = _a.감소, exports.맘대로증가 = _a.맘대로증가;
