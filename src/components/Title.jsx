import React from 'react';
import "../styles/components/Title.scss";

const Title = ({title, color, lineColor = false}) => {
    return (
        <div className={`title ${lineColor === true ? "center" : ""}`}>
            <h2 className={`${color}`}>
                <span></span>
            </h2>
        </div>
    );
};

export default Title;
