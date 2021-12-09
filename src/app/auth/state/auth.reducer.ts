import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/counter/state/counter.state";
import { loginSuccess } from "./auth.actions";

const _authReducer = createReducer(initialState, 
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        }
        
    }),
)


export function AuthReducer(state, action) {
    return _authReducer(state, action)
}