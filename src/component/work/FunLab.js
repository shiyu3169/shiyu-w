import React, { useState } from "react";
import Items from "../layout/Items";
import item1 from "../../img/funlab/item1.png";
import item3 from "../../img/funlab/item3.png";
import item5 from "../../img/funlab/item5.png";

const FunLab = () => {
  const [items] = useState([
    {
      src: item1,
      link: "https://type-n-talk.netlify.com/",
      code: "https://github.com/shiyu3169/Type-N-Talk"
    },
    {
      src: item3,
      link: "https://pixabay-image.netlify.com/",
      code: "https://github.com/shiyu3169/PixaBay_Image_Finder"
    },

    {
      src: item5,
      link: "https://image-filter.netlify.com/",
      code: "https://github.com/shiyu3169/online_image_filter"
    }
  ]);
  return <Items items={items} title="Shiyu's Fun Lab" />;
};

export default FunLab;
