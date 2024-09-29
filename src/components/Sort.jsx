import React from 'react';
import { RiGridFill } from "react-icons/ri";
import { IoIosListBox } from "react-icons/io";
import "../styles/Products.css";
import { useFilterContext } from '../context/filter_context';

export const Sort = () => {

    const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

    return (
        <>
            <div className="col-12">
                <div className="row text-md-center justify-content-evenly align-items-baseline">
                    <div className="col-4">
                        <button 
                            className={`viewChangeBtn ${grid_view ? "useIn" : "nothing"}`}
                            onClick={setGridView}
                        >
                            <RiGridFill />
                        </button>
                        <button 
                            className={`viewChangeBtn ${grid_view ? "nothing" : "useIn"}`}
                            onClick={setListView}
                        >
                            <IoIosListBox />
                        </button>
                    </div>
                    <div className="col-4 text-md-center text-start" style={{color : "#F16477", fontSize : "1.2rem"}}>
                        {`${filter_products.length} Products Available`} 
                    </div>
                    <div className="col-4 text-md-center text-end">
                        <form action="#" className='form-group' >
                            <label htmlFor="sort"></label>
                            <select name="sort" id="sort" className='filterSyle' onClick={sorting}>
                                <option value="lowest">Price (Lowest)</option>
                                <option value="#" disabled></option>
                                <option value="highest">Price (Highest)</option>
                                <option value="#" disabled></option>
                                <option value="a-z">Price (A-Z)</option>
                                <option value="#" disabled></option>
                                <option value="z-a">Price (Z-A)</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
