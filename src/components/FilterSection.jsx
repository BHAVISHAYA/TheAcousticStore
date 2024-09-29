import React, { useState } from 'react';
import "../styles/Products.css";
import FormatPrice from '../Helpers/FormatPrice';
import { useFilterContext } from '../context/filter_context';

export const FilterSection = () => {

    const { 
        filters : { text, category, color, price, maxPrice, minPrice },
        all_products,
        updateFilterValue, 
        clearFilters,
    } = useFilterContext();

    //* To Get Unique data based on any value of object like (category, colors, company)
    const getUniqueData = (data, property) => {
        let newVal = data.map((currProduct) => {
            return currProduct[property];
        });

        if(property === "colors") {
            //* return (newVal = ["All", ...new Set([].concat(...newVal))]);
            newVal = newVal.flat();
        }
        return newVal = ["All", ...new Set(newVal)];
    }

    //* Unique category data 
    const categoryData = getUniqueData(all_products, "category");

    //* Unique color data
    const colorData = getUniqueData(all_products, "colors");

    //* Uniqe company data
    const companyData = getUniqueData(all_products, "company");

    return (
        <>
            <div className="row px-md-4 Filter">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="text" 
                        className='form-control w-75' 
                        name="text" 
                        value={text} 
                        autoComplete='off'
                        placeholder='search'
                        onChange={updateFilterValue} 
                        style={{color : "#F16477", fontWeight : "600"}}
                    />
                </form>
                <div className="col-11 py-3 pt-md-5 categoryBtn">
                    <h4>Category</h4>
                    {
                        categoryData.map((currCategory, index) => {
                            return <button 
                                key={index} 
                                type="button" 
                                name="category"
                                value={currCategory}
                                onClick={updateFilterValue}
                                className={currCategory === category ? "py-1 showColor" : "py-1"}
                            > 
                                {currCategory} 
                            </button>
                        })
                    }
                </div>
                <div className="col-11 pt-2 pb-4">
                    <h4>Company</h4>
                    <form action="#" >
                        <select 
                            name="company" 
                            id="company" 
                            className='w-50 mt-3'
                            onClick={updateFilterValue}
                        >
                            {
                                companyData.map((currCompany, index) => {
                                    return <option key={index} value={currCompany} name="company"> { currCompany } </option>
                                })
                            }
                        </select>
                    </form>
                </div>
                <div className="col-11 pt-2 pb-4">
                    <h4 className='pb-3'>Colors</h4>
                    {
                        colorData.map((currColor, index) => {
                            if(currColor.toLowerCase() === "all") {
                                return <button
                                    key={index}
                                    type="button"
                                    className={color.toLowerCase() === currColor.toLowerCase() ? "m-1 getAllColor activeClass" : "m-1 getAllColor"}
                                    value={currColor}
                                    name="color"
                                    onClick={updateFilterValue}
                                >
                                    All
                                </button>
                            }
                            else {
                                return <button
                                    key={index}
                                    type="button"
                                    style={{backgroundColor : currColor, color : currColor}}
                                    className={color === currColor ? "colorBtn m-1 activeClass" : "colorBtn m-1"}
                                    value={currColor}
                                    name="color"
                                    onClick={updateFilterValue}
                                > 
                                    {color === currColor ? <i className="fa-solid fa-check" style={{color : "white", fontWeight : "800"}}></i> : "."}
                                </button>
                            }
                        })
                    }
                </div>
                <div className="col-11 pt-2 pb-4">
                    <h4>Price</h4>
                    <p> <FormatPrice price={price} /> </p>
                    <input 
                        type="range" 
                        min={minPrice} 
                        max={maxPrice} 
                        value={price} 
                        name="price"
                        onChange={updateFilterValue} 
                    />
                </div>
                <div className="col-11 pt-2 pb-4">
                    <button className="clearFilterBtn" onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
        </>
    )
}