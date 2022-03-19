const initialValue = {
    cars: ['BMV', 'Mercedes', 'Honda', 'Maybach'],
    isAuthenticated: false,

}

export default function reducer(state = initialValue, action, args) {
    switch (action) {
        case 'CREATE':
            const newCar = args;
            return{
                ...state,
                cars: [...state.cars, newCar]
            }
            break;
        default:
            return state;
    }
}