import {TOGGLE_ROLE, LOGGIN_STATUS} from '@/actions/type'

const initialState = {
    role: 0,
    status: false
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
        default:
            return state
    }
}

export default auth