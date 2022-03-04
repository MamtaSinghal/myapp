import { MetaReducer } from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import { User } from '../model/user.model';
import { hydrationMetaReducer } from './hydration-meta.reducer';

const initialState: User = {
    email: '',
}

export function reducer(state: User = initialState, action: userActions.Actions) {
    switch (action.type) {
        case userActions.ADD_USER_EMAIL:
            return { ...state, email: action.payload.email };
        case userActions.REMOVE_USER_EMAIL: {
            state = {email : ''}
            return state;
        }
        default:
            return state;
    }
}


export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
]