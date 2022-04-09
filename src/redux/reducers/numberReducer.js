const stateDefault = 1

export const stateNumber = (state = stateDefault, action) => {
    switch (action.type){
        case 'TANG_GIAM_SO_LUONG': {
            state = state + 1;
            return state;
        }
        default: return state;
    }
}



