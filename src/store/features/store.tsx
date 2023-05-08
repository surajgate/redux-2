import { configureStore } from "@reduxjs/toolkit";
import  { PersonSlice } from "./personSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

 const store = configureStore({
    reducer : {
        person : PersonSlice.reducer
    }
})

export const useAppDispatch : ()=> typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;
