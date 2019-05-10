import React from "react";

const SubSkill = ({ title, img }) => {
    return (
        <div className="text-center">
            <img src={img} alt={title} />
            <h4>{title}</h4>
        </div>
    );
};

export default SubSkill;
