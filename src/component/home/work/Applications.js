import React, { useState } from "react";
import item1 from "../../../img/applications/item1.png";
import item2 from "../../../img/applications/item2.png";
import item3 from "../../../img/applications/item3.png";
import item4 from "../../../img/applications/item4.png";
import item5 from "../../../img/applications/item5.png";
import item6 from "../../../img/applications/item6.png";
import Items from "../../utility/Items";

const Applications = () => {
    const [items] = useState([
        {
            src: item1,
            link: "https://msimbo.herokuapp.com/",
            code: "https://github.com/shiyu3169/msimbo-react"
        },
        {
            src: item2,
            link: "https://msimbo.herokuapp.com/",
            code: "https://github.com/shiyu3169/msimbo-react"
        },
        {
            src: item3,
            link: "https://msimbo.herokuapp.com/",
            code: "https://github.com/shiyu3169/msimbo-react"
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

    return <Items items={items} title="Full Stack Applications" />;
};

export default Applications;
