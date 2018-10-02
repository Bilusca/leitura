import { FETCH_COMMENT_BY_POST_ID } from './types';

const INITIAL_STATE = {
    commentList: { comments:[] }
}

export const commentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_COMMENT_BY_POST_ID:
            return {
                ...state,
                commentList: {
                    comments: action.comments
                }
            }
        default:
            return state;
    }
}