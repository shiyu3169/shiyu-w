import React from "react";

const Social = ({ iconClass, to, email }) => {
    return (
        <a href={to} target={email ? null : "_blank"} rel="noopener noreferrer">
            <i className={iconClass} />
        </a>
    );
};

export default Social;
