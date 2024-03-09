import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/bannerone.webp';
import image2 from '../../assets/three.webp';
import image3 from '../../assets/two.webp';
import image4 from '../../assets/bannerone.webp';
import image5 from '../../assets/three.webp';
import image6 from '../../assets/two.webp';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="w-full ">
      {/* Add your individual slides here */}
      <div className='w-full'>
        <img src={image1} alt="Slide 1" className='w-full h-full' />
      </div>
      <div className='w-full'>
        <img src={image2} alt="Slide 2" className='w-full h-full' />
      </div>
      <div className='w-full'>
        <img src={image3} alt="Slide 3" className='w-full h-full' />
      </div>
      <div className='w-full'>
        <img src={image4} alt="Slide 4" className='w-full h-full' />
      </div>
      <div className='w-full'>
        <img src={image5} alt="Slide 5" className='w-full h-full' />
      </div>
      <div className='w-full'>
        <img src={image6} alt="Slide 6" className='w-full h-full' />
      </div>
    </Slider>
  );
};

export default Banner;
