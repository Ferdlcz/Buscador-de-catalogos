import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-violet-700'>Encuentra</span> tu catalogo facilmente.
        </h1>
        <p className='max-w-[480px] mb-8'>
          Explora los ultimos catalogos de Andrea y Cklass. Accede rapidamente a los
          catalogos mas recientes de estas marcas, ofreciendote una experiencia de busqueda
          sencilla y comoda en un solo lugar.
        </p>
      </div>

      <div className='hidden flex-1 lg:flex justify-around items-end mr-[3%]'>
        <img src={Image} alt='logo cklass & andrea'/>
      </div>
    </div>

    <Search />
  </section>;
};

export default Banner;
