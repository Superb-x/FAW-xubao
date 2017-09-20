import {
    TOGGLE_ROLE, 
    LOGGIN_STATUS,
    CHANGE_NAME
} from './type'


// 三种角色状态切换
export const changerole = (role) => ({
    type: TOGGLE_ROLE,
    role    
})

export const loginstatus = (st) => ({
    type: LOGGIN_STATUS,
    st
})

export const changename = (name) => ({
    type: CHANGE_NAME,
    name
})