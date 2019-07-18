import React from 'react';

import Header from './Header';
import Applications from './work/Applications';
import Design from './work/Design';
import FunLab from './work/FunLab';

const Home = () => {
  return (
    <>
      <Header />
      <Applications />
      <Design />
      <FunLab />
      <div className='py-3 text-center'>
        <a
          href='https://github.com/shiyu3169?tab=repositories'
          rel='noopener noreferrer'
          target='_blank'
          className='btn-dark'
        >
          More on GitHub
        </a>
      </div>
    </>
  );
};

export default Home;
