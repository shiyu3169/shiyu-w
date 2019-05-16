import React, { useState } from "react";
import item1 from "../../../img/applications/item1.png";
import item2 from "../../../img/applications/item2.png";
import item3 from "../../../img/applications/item3.png";
import item4 from "../../../img/applications/item4.png";
import item5 from "../../../img/applications/item5.png";
import item6 from "../../../img/applications/item6.png";
import Items from "../../utility/Items";

const Applications = () => {
    const [items] = useState([item1, item2, item3, item4, item5, item6]);

    return <Items items={items} title="Full Stack Applications" />;
};

export default Applications;
