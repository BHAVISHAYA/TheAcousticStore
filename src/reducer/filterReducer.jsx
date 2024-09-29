const filterReducer = (state, action) => {
    
    switch(action.type) {
        case "LOAD_FILTER_PRODUCTS" :
            
            let priceArr = action.payload.map((currProduct) => {
                return currProduct.price;
            }); 
            let maxPrice = Math.max(...priceArr);
            
            return {
                ...state, 
                filter_products : [...action.payload],
                all_products : [...action.payload],
                filters : { ...state.filters, maxPrice : maxPrice, price : maxPrice },
            };
        
        case "SET_GRID_VIEW" : 
            return {
                ...state, 
                grid_view : true,
            };
        
        case "SET_LIST_VIEW" : 
            return {
                ...state, 
                grid_view : false,
            };
        
        case "GET_SORT_VALUE" :
            // let userSortValue = document.getElementById("sort");
            // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state, 
                sorting_value : action.payload, 
            };
        
        case "SORTING_PRODUCTS" :
            let newSortedData;
            const { filter_products } = state; 
            let tempSortedProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if(state.sorting_value === "lowest") {
                    return a.price - b.price;
                }
                else if(state.sorting_value === "highest") {
                    return b.price - a.price;
                }
                else if(state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                else if(state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                } 
            };

            newSortedData = tempSortedProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products : newSortedData, 
            };
        
        case "UPDATE_FILTER_VALUE" : 
            const { name, value } = action.payload; 
            return {
                ...state, 
                filters : {
                    ...state.filters, 
                    [name] : value,
                }
            };
        
        case "FILTER_PRODUCTS" : 
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;

            if(text) {
                tempFilterProduct = tempFilterProduct.filter((currProduct) => {
                    return currProduct.name.toLowerCase().includes(text);
                });
            }

            if(category.toLowerCase() !== "all") {
                tempFilterProduct = tempFilterProduct.filter((currProduct) => {
                    return currProduct.category === category;
                });
            }

            if(company.toLowerCase() !== "all") {
                tempFilterProduct = tempFilterProduct.filter((currProduct) => {
                    return currProduct.company.toLowerCase() === company.toLowerCase();
                });
            }

            if(color.toLowerCase() !== "all") {
                tempFilterProduct = tempFilterProduct.filter((currProduct) => {
                    return currProduct.colors.includes(color);
                });
            }

            if(price === 0) {
                tempFilterProduct = tempFilterProduct.filter((currProduct) => currProduct.price == price );
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((currProduct) => currProduct.price <= price );
            }

            return {
                ...state, 
                filter_products : tempFilterProduct,
            };
        
        case "CLEAR_FILTERS" : 
            return {
                ...state, 
                filters : {
                    ...state.filters,
                    text : "",
                    category : "All",
                    company : "All",
                    color : "All", 
                    minPrice : 0, 
                    price : state.filters.maxPrice,
                    maxPrice : state.filters.maxPrice, 
                }
            };

        default : 
            return state;
    }

}

export default filterReducer;