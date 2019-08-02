import React, { useState } from "react";
import Items from "../../utility/Items";
import item1 from "../../../img/funlab/item1.png";
import item2 from "../../../img/funlab/item2.png";
import item3 from "../../../img/funlab/item3.png";
import item4 from "../../../img/funlab/item4.png";
import item5 from "../../../img/funlab/item5.png";
import item6 from "../../../img/funlab/item6.png";
const FunLab = () => {
  const [items] = useState([
    {
      src: item1,
      link: "https://type-n-talk.netlify.com/",
      code: "https://github.com/shiyu3169/Type-N-Talk"
    },
    {
      src: item2,
      link: "https://threejs-animation.netlify.com/",
      code: "https://github.com/shiyu3169/Type-N-Talk"
    },
    {
      src: item3,
      link: "https://pixabay-image.netlify.com/",
      code: "https://github.com/shiyu3169/PixaBay_Image_Finder"
    },
    {
      src: item4,
      link: "https://sliding-sign-in.netlify.com/",
      code: "https://github.com/shiyu3169/sliding-sign-in-sign-up-form"
    },
    {
      src: item5,
      link: "https://image-filter.netlify.com/",
      code: "https://github.com/shiyu3169/online_image_filter"
    },
    {
      src: item6,
      link: "https://social-accordion.netlify.com/",
      code: "https://github.com/shiyu3169/social_accordion"
    }
  ]);
  return <Items items={items} title="Shiyu's Fun Lab" />;
};

export default FunLab;
