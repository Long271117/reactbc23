const stateDefaultImg = './img/products/red-car.jpg';

export const stateImgCar = (state = stateDefaultImg, action) => {
    switch (action.type){
        case 'DOI_MAU_XE': {
            console.log(action)
            state = action.imgCar;
            return state;
        }
        default: return state;
    }
}

