import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { changeText, customIncrement, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";




const _counterReducer = createReducer(initialState,
    on(increment, (state)=> {
        return {
            ...state,
            counter: state.counter+1,
        }
    }),
    on(decrement, (state)=> {
        return {
            ...state,
            counter: state.counter-1,
        }
    }),
    on(reset, (state)=> {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(customIncrement, (state, action) => {
        //console.log(action)
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }),
    on(changeText, (state) => {
        return {
            ...state,
            text: 'Modified example'
        }
    })
)

export function counterReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}