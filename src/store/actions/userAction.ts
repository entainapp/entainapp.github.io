import { UserInfo } from '@/libs/interfaces';
import { AppDispatch } from '../../store';
import { signUpStart, signUpSuccess, signUpFailure, signInStart, signInSuccess, signInFailure } from '../slices/userSlice';

// Sign up thunk action creator
export const signUp = (userInfo: UserInfo) => async (dispatch: AppDispatch) => {
    try {
        dispatch(signUpStart());
        // Call the sign up API here
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(signUpSuccess(data));
        } else {
            const isJson = response.headers?.get('content-type')?.includes('application/json');
            const data = isJson ? await response.json() : null;
            const err = data ? data.message : response.statusText;

            throw new Error(err);
        }
    } catch (error: any) {
        dispatch(signUpFailure(error.message));
    }
};

// Sign in thunk action creator
export const signIn = (userInfo: UserInfo) => async (dispatch: AppDispatch) => {
    try {
        dispatch(signInStart());
        // Call the sign in API here
        const response = await fetch('/api/signin', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(signInSuccess(data));
        } else {
            throw new Error('Sign in failed.');
        }
    } catch (error: any) {
        dispatch(signInFailure(error.message));
    }
};