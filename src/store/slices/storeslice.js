import { createSlice } from '@reduxjs/toolkit'



export const storeslice = createSlice({
  name: 'storeslice',
  initialState : {
    cart: [],
  },
  reducers: {
    addtocart: (state,action) => {
        // container id and number of products
        state.cart.push({id : action.payload.quantity,quantity: action.payload.quantity})
    }, 
    removefromcart: (state,action) => {
        state.cart.filter(e => !e.action.id)
    },

  },
})

// Action creators are generated for each case reducer function
export const { addtocart,removefromcart } = storeslice.actions

export default storeslice.reducer