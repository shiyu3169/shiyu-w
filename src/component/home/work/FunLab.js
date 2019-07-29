import React, { useState } from "react";
import Items from "../../utility/Items";
import item1 from "../../../img/funlab/item1.png";
import item2 from "../../../img/funlab/item2.png";
import item3 from "../../../img/funlab/item3.png";
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
      link: "https://draggable-and-droppable.netlify.com/",
      code: "https://github.com/shiyu3169/drag-and-drop"
    }
  ]);
  return <Items items={items} title="Shiyu's Fun Lab" />;
};

export default FunLab;
