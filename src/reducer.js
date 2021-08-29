export const initialState = {
    basket: [],
    user: null,
    orderID: null
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
    SET_ORDER_ID: "SET_ORDER_ID"
}

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0)
}

const reducer = (state, action)=> {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case "REMOVE_ITEM":
        const index = state.basket.findIndex((basketItem=> basketItem.id === action.id))

        let newBasket = [...state.basket];

        if (index>=0){
            newBasket.splice(index,1)
        }
        else {console.log("no puedo borrar")}

        return {
            ...state,
            basket: newBasket,
            
        };

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }    
        
        case "SET_ORDER_ID":
            return {
                ...state,
                orderID: action.orderID
            }
    
        default: return state;
    }
    
}

export default reducer