import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './QuoteSwiper.css'

export default function QuoteSwiper({ quotes }) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="quoteSwiper"
    >
      {quotes.map((quote, index) => (
        <SwiperSlide key={index}>
          <div className='quoteSwiper-container-slide' style={{ backgroundImage: `url(${quote.image})` }}>
            <h2 className='quoteSwiper-slide-quote'>"{quote.quote}"</h2>
            <p className='quoteSwiper-slide-author'>– {quote.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
