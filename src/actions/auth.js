import {TOGGLE_ROLE} from './type'


// 三种角色状态切换
export const changerole = (role) => ({
    type: TOGGLE_ROLE,
    role    
})
