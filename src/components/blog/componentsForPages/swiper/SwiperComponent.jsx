import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperComponent.css'
import '../../../../styles/global.css'
import Paragraph from '../paragraph/Paragraph';
import List from '../list/List';

function SwiperComponent({ slides }) {
  return (
    <div className="container">
       <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='swiper'>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Paragraph title={slide.title} text={slide.text}>
              {slide.list ? <List listElements={slide.list}/>: ""}
            </Paragraph>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
