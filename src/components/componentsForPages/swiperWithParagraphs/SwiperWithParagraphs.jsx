//Components
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Paragraph, List, Picture} from '../../componentsDependencies'

//CSSFiles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperWithParagraphs.css';
import 'swiper/css';

function SwiperWithParagraphs({ slides }) {
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
            {slide.image &&
              <Picture path={slide.image} altText={slide.altText}/>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

<<<<<<< HEAD
export default SwiperWithParagraphs;
=======
export default SwiperWithParagraphs;
>>>>>>> 8d94c25877d8488f81d941d117087a7f645b012e
