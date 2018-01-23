import {
    TOGGLE_ROLE, 
    LOGGIN_STATUS,
    CHANGE_NAME
} from '@/actions/type'

const initialState = {
    role: 0,
    status: 1,
    name: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ROLE:
            return {
                ...state,
                role: action.role
            }
        case LOGGIN_STATUS:
            return {
                ...state,
                status: action.st
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}

export default auth