import React from 'react';
import "../styles/components/Title.scss";

const Title = ({title, color, lineCenter = false}) => {
    return (
        <div className={`title ${lineCenter === true ? "center" : ""}`}>
           <h2>{title}</h2>
            <h2 className={`${color}`}>
                <span></span>
            </h2>
        </div>
    );
};

export default Title;
