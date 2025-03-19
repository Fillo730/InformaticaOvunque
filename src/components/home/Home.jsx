import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import FloatingCirclesWithChildren from '../../animations/FloatingCirclesWithChildren';
import '../../styles/global.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Home.css'
import CollisionButton from '../generalComponents/button/CollisionButton';
import CuriosityCard from './curiosityCard/CuriosityCard';
import quotes from './objects/quotes'
import curiosities from './objects/curiosities';

export default function Home() {

  return (
    <>
      <div>
        <h1 className="text-central primary-color">L'informatica come non l'hai mai vista</h1>
      </div>
      <FloatingCirclesWithChildren>
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
        className="mySwiper"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
          <div 
            className='container-slide' 
            style={{ backgroundImage: `url(${quote.image})` }}
          >
            <h2 className='slide-quote'>
              "{quote.quote}"
            </h2>
            <p className='slide-author'>– {quote.author}</p>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
        <div className='greetings-container'>
          <div>
            <h1 className='primary-color text-central'>Benvenuto a Informatica Ovunque</h1>
            <p className='greetings-container-text'>
              E se ti facessi vedere che l'informatica è alla <label>portata di tutti</label> e che potresti imparare tantissime 
              cose nuove cosa mi diresti? Come? Sono pazzo? Bhè, non credermi sulla parola e scoprilo tu stesso
            </p>
          </div>
          <CollisionButton path="/blog" text="Scopri di più"/>
        </div>

        <div className="curiosity-container">
          <h1 className='curiosity-title primary-color text-central'>Qualche Curiosità interessante</h1>
          <div className="curiosity-list">
          {curiosities.map((curiosity) => (
            <CuriosityCard 
              key={curiosity.id}
              frontTitle={curiosity.frontTitle}
              frontText={curiosity.frontText}
              backTitle={curiosity.backTitle}
              backText={curiosity.backText}
            />
          ))}
          </div>
        </div>


      </FloatingCirclesWithChildren>
    </>
  );
}
