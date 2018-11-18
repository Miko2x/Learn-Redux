import { EMAIL_CHANGED } from './types';

export const email_changed = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    }
}