import React, { useState } from "react";
import item2 from "../../img/design/item2.png";
import item4 from "../../img/design/item4.png";
import item5 from "../../img/design/item5.png";
import Items from "../layout/Items";

const Design = () => {
  const [items] = useState([
    {
      src: item2,
      link: "https://news-grid-sw.netlify.com",
      code: "https://github.com/shiyu3169/news-grid"
    },

    {
      src: item4,
      link: "https://travelvillie.netlify.com/",
      code: "https://github.com/shiyu3169/Travelvillie"
    },
    {
      src: item5,
      link: "https://www.qwqiuting.com/",
      code: "https://github.com/shiyu3169/qwqiuting"
    }
  ]);

  return <Items items={items} title="Shiyu's Design" />;
};

export default Design;
