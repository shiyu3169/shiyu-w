import React from "react";

import Item from "./Item";
const Items = ({ items, title }) => {
    return (
        <div className="text-center">
            <section id="work-a">
                <div className="container py-3">
                    <h2 className="section-title">{title}</h2>
                    <div className="bottom-line" />
                    <div className="items">
                        {items.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Items;
