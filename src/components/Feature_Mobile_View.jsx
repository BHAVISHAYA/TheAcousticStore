import React from 'react';
import "../styles/Features.css";

export const Feature_Mobile_View = (props) => {

    const { para_1, para_2, i_tag } = props;

    return (
        <>
            <div className="col-md-6">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 text-center text-md-end">
                        <i className={i_tag}></i>
                    </div>
                    <div className="col-md-8 text-center text-md-start mt-3">
                        <p> { para_1 } </p>
                        <p style={{marginTop: "-15px", fontWeight: "400"}}> { para_2 } </p>
                    </div>
                </div>
            </div>
        </>
    )
}
