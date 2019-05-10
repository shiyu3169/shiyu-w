import React from "react";

const Info = ({ title, content, iconClasses }) => {
    return (
        <div>
            <i className={iconClasses} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Info;
