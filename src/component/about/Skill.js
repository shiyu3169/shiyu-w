import React from "react";

const Skill = ({ title, width }) => {
    return (
        <>
            <h4>{title}</h4>
            <div className="progress">
                <div style={{ width }} />
            </div>
        </>
    );
};

export default Skill;
