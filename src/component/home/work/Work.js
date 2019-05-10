import React, { useState } from "react";
import item1 from "../../../img/items/item1.png";
import item2 from "../../../img/items/item2.png";
import item3 from "../../../img/items/item3.png";
import item4 from "../../../img/items/item4.png";
import item5 from "../../../img/items/item5.png";
import item6 from "../../../img/items/item6.png";

import Item from "./Item";
const Work = () => {
    const [items] = useState([item1, item2, item3, item4, item5, item6]);

    return (
        <section id="work-a" className="text-center py-3">
            <div className="container">
                <h2 className="section-title">My Work</h2>
                <div className="bottom-line" />
                <div className="items">
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
