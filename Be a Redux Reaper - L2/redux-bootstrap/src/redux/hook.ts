import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>(); // must use () or it will give error
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //
