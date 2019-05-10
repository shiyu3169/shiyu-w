import React, { useState } from "react";
import item1 from "../../img/items/item1.png";
import item2 from "../../img/items/item2.png";
import item3 from "../../img/items/item3.png";
import item4 from "../../img/items/item4.png";
import item5 from "../../img/items/item5.png";
import item6 from "../../img/items/item6.png";
import item7 from "../../img/items/item7.png";
import item8 from "../../img/items/item8.png";
import item9 from "../../img/items/item9.png";
const Work = () => {
    const [items] = useState([
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        item7,
        item8,
        item9
    ]);

    return (
        <section id="work-a" className="text-center py-3">
            <div className="container">
                <h2 className="section-title">My Work</h2>
                <div className="bottom-line" />
                <div className="items">
                    {items.map((item, i) => (
                        <div className="item" key={i}>
                            <div className="item-image">
                                <img src={item} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">Design</p>
                                    <h2 className="item-text-title">
                                        Great Gradients
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
