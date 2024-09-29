import React from 'react';
import "../styles/Features.css";

export const Feature_Window_View = (props) => {

    const { para_1, para_2, i_tag } = props;

    return (
        <>
            <div className="col-lg-3 py-3">
                <div className="row justify-content-center align-items-stretch text-center text-lg-start">
                    <div className="col-md-3">
                        <i className={i_tag}></i>
                    </div>
                    <div className="col-md-9">
                        <p> { para_1 } </p>
                        <p style={{marginTop : "-15px", fontWeight : "400"}}> { para_2 } </p>
                    </div>
                </div>
            </div>
        </>
    )
}
