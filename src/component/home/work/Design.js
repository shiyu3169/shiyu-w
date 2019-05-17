import React, { useState } from "react";
import item1 from "../../../img/design/item1.png";
import item2 from "../../../img/design/item2.png";
import item3 from "../../../img/design/item3.png";
import item4 from "../../../img/applications/item1.png";
import item5 from "../../../img/applications/item2.png";
import item6 from "../../../img/applications/item3.png";
import Items from "../../utility/Items";

const Design = () => {
    const [items] = useState([
        {
            src: item1,
            link: "https://dev-connector.netlify.com",
            code: "https://github.com/shiyu3169/Social-Network-Theme"
        },
        {
            src: item2,
            link: "https://news-grid-sw.netlify.com",
            code: "https://github.com/shiyu3169/news-grid"
        },
        {
            src: item3,
            link: "https://menu-css.netlify.com",
            code: "https://github.com/shiyu3169/Hamburger_Menu_CSS"
        },
        {
            src: item4,
            link: "https://msimbo.herokuapp.com/",
            code: "https://github.com/shiyu3169/msimbo-react"
        },
        {
            src: item5,
            link: "https://msimbo.herokuapp.com/",
            code: "https://github.com/shiyu3169/msimbo-react"
        },
        {
            src: item6,
            link: "https://msimbo.herokuapp.com/",
            code: "https://github.com/shiyu3169/msimbo-react"
        }
    ]);

    return <Items items={items} title="Front End Design Themes" />;
};

export default Design;
