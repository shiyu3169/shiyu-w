import React from "react";

const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="item-image">
                <img src={item} alt="" />
            </div>
            <div className="item-text">
                <div className="item-text-wrap">
                    <p className="item-text-category">Design</p>
                    <h2 className="item-text-title">Great Gradients</h2>
                </div>
            </div>
        </div>
    );
};

export default Item;
