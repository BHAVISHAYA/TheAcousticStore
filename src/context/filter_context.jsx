import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer.jsx";

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : true,
    sorting_value : "lowest",
    filters : {
        text : "",
        category : "All",
        company : "All",
        color : "All", 
        maxPrice : 0, 
        price : 0,
        minPrice : 0, 
    },
}


export const FilterContextProvider = ({children}) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    //* Set The Grid View 
    const setGridView = () => {
        return dispatch({ type : "SET_GRID_VIEW" });
    };

    //* Set The List View 
    const setListView = () => {
        return dispatch({ type : "SET_LIST_VIEW" });
    }

    //* Filter Sorting 
    const sorting = (event) => {
        let userValue = event.target.value;
        return dispatch({ type : "GET_SORT_VALUE", payload : userValue });
    }

    //* Updating the filter values
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type : "UPDATE_FILTER_VALUE", payload : { name, value } });
    }

    //* Clear Filter 
    const clearFilters = () => {
        dispatch({ type : "CLEAR_FILTERS" });
    }

    //* Actual sorting goes from here 
    useEffect(() => {
        dispatch({ type : "FILTER_PRODUCTS" })
        dispatch({ type : "SORTING_PRODUCTS" })
    }, [state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type : "LOAD_FILTER_PRODUCTS", payload : products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};


export const useFilterContext = () => {
    return useContext(FilterContext);
};