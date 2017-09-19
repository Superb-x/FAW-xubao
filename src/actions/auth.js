import {TOGGLE_ROLE, LOGGIN_STATUS} from './type'


// 三种角色状态切换
export const changerole = (role) => ({
    type: TOGGLE_ROLE,
    role    
})

export const loginstatus = (st) => ({
    type: LOGGIN_STATUS,
    st
})