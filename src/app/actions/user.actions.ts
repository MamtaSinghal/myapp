import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export const ADD_USER_EMAIL = 'Add Email';
export const REMOVE_USER_EMAIL= 'Remove Email';

export class AddUserEmail implements Action {
    readonly type = ADD_USER_EMAIL;
    constructor(public payload: User) {}
}


export class RemoveUserEmail implements Action {
    readonly type = REMOVE_USER_EMAIL;
}

export type Actions = | AddUserEmail | RemoveUserEmail ;