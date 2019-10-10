import React, { useState } from "react";
import item1 from "../../img/applications/item1.png";
import item2 from "../../img/applications/item2.png";
import item3 from "../../img/applications/item3.png";
import item4 from "../../img/applications/item4.png";
import item5 from "../../img/applications/item5.png";
import item6 from "../../img/applications/item6.png";
import Items from "../layout/Items";

const Applications = () => {
  const [items] = useState([
    {
      src: item1,
      link: "http://www.msimbo.com",
      code: "https://github.com/shiyu3169/msimbo-react"
    },
    {
      src: item2,
      link: "https://www.ulem.org/",
      code: "https://github.com/shiyu3169/ulem"
    },
    {
      src: item6,
      link: "https://keep-contacting.herokuapp.com/",
      code: "https://github.com/shiyu3169/contact_keeper"
    },
    {
      src: item4,
      link: "https://msimbo-angular.herokuapp.com/",
      code: "https://github.com/shiyu3169/MSIMBO-management"
    },
    {
      src: item5,
      link: "https://github-find.netlify.com/",
      code: "https://github.com/shiyu3169/github_finder"
    },
    {
      src: item3,
      link: "https://shopping-list-sw.herokuapp.com/",
      code: "https://github.com/shiyu3169/shopping-list-mern"
    }
  ]);

  return <Items items={items} title="Shiyu's Applications" />;
};

export default Applications;
