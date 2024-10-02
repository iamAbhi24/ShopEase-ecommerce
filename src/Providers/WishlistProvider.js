import {createContext, useReducer } from "react"; 

const WishlistContext=createContext();

 const wishlistReducer=(state,action)=>{
        switch(action.type){
            case "ADD_TO_WISHLIST":
            return [...state,action.itemId];
            case "REMOVE_FROM_WISHLIST":
                return state.filter((id)=>{return id!==action.itemId});
            default:
                return state;
        }
}

export const WishlistProvider=({children})=>{
     const [wishlist, dispatch]=useReducer(wishlistReducer,[]);
    return(
      <WishlistContext.Provider value={{wishlist,dispatch}} >
        {children}
      </WishlistContext.Provider>
    )
}

export default WishlistContext;
