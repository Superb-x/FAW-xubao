import {TOGGLE_ROLE} from '@/actions/type'

const initialState = {
    role: 0
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ROLE:
            return {
                ...state,
                role: action.role
            }
        default:
            return state
    }
}

export default auth