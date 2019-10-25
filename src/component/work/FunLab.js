import React, { useState } from 'react';
import Items from '../layout/Items';
import item1 from '../../img/funlab/item1.png';
import item2 from '../../img/funlab/item2.png';
import item5 from '../../img/funlab/item5.png';

const FunLab = () => {
  const [items] = useState([
    {
      src: item1,
      link: 'https://type-n-talk.netlify.com/',
      code: 'https://github.com/shiyu3169/Type-N-Talk'
    },
    {
      src: item2,
      link: 'https://pass-generator.netlify.com/',
      code: 'https://github.com/shiyu3169/password_generator'
    },

    {
      src: item5,
      link: 'https://image-filter.netlify.com/',
      code: 'https://github.com/shiyu3169/online_image_filter'
    }
  ]);
  return <Items items={items} title="Shiyu's Fun Lab" />;
};

export default FunLab;
