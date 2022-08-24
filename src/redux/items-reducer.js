import { itemsAPI } from '../api/api';

const initialState = {
    items: [] 
}

export const itemsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'SET-ITEMS':
            return {...state, items: action.items}

        case 'DELETE-ITEM':
            return {...state, items: state.items.filter(item => item.id !== action.id)}

        case 'LIKE-ITEM':
            return {...state, items: state.items.map(item => {
                if(item.id === action.id) {
                    return {...item, [action.prop]: !item[action.prop]}
                }
                return item
            })}

        default:
            return state
    }
}

export const setItemsAC = (items) => ({type: 'SET-ITEMS', items} )
export const deleteItemAC = (id) => ({type: 'DELETE-ITEM', id})
export const likeItemAC = (id, prop) => ({type: 'LIKE-ITEM', id, prop})


export const getItemsTC = () => {
    return async (dispatch) => {
        let res = await itemsAPI.getItems()
        const items = res.data.data.results.map((i) => {
            return {
                id: i.id,
                name: i.name,
                like: false,
            } 
        })
        dispatch(setItemsAC(items))        
    }
}