import * as Types from '../../contants/user'
const initialState = false

const User = (state = initialState, action) => {
    switch (action.type){
        case Types.GET_USER:
            return state
        default:
            return state
    }
}

export default User