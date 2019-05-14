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
        <div className="text-center">
            <section id="work-a">
                <div className="container py-3">
                    <h2 className="section-title">My Work</h2>
                    <div className="bottom-line" />
                    <div className="items">
                        {items.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="py-3">
                <a
                    href="https://github.com/shiyu3169?tab=repositories"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn-dark"
                >
                    More on GitHub
                </a>
            </div>
        </div>
    );
};

export default Work;
