import React from "react";

const Title = ({ text }) => {
    return (
        <>
            <h2 className="section-title">{text}</h2>
            <div className="bottom-line" />
        </>
    );
};

export default Title;
