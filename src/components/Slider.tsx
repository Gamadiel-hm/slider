import './slider.css';

export const SliderShared = () => {
  return (
    <>
      <h2>Slider</h2>
      <div className='slider'>
        <img
          src='/images/movil/banner-responsiv.jpg'
          alt='banner 1'
          className='img1'
        />
        <img
          src='/images/movil/banner-responsiv.jpg'
          alt='banner 2'
        />
        <img
          src='/images/movil/banner-responsiv.jpg'
          alt='banner 3'
        />
        <img
          src='/images/movil/banner-responsiv.jpg'
          alt='banner 4'
        />
        <div>
          <img
            src='/images/movil/banner-responsiv.jpg'
            alt='banner 4'
          />
        </div>
      </div>
    </>
  );
};
