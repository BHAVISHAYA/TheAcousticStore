import React from 'react';
import "../styles/Characteristics.css";

export const Characters = (props) => {
    
    const { num, title, desc } = props;

    
    return (
        <>
            <div class="col-12 my-4">
              <span class="number"> { num } </span>
              <p class="title jost mt-4"> { title } </p>
              <p class="desc"> { desc } </p>
            </div>
        </>
    )
}
