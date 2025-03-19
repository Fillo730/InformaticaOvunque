import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import FloatingCirclesWithChildren from '../../animations/FloatingCirclesWithChildren';
import '../../styles/global.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Home.css'
import CollisionButton from '../generalComponents/button/CollisionButton';

export default function Home() {
  const quotes = [
    {
      quote: "Students who study computer science unlock a world of opportunities for themselves.",
      author: "John Deasy",
      image: "https://tecnico.ulisboa.pt/files/2021/05/cientistas-do-tecnico-voltam-a-estar-em-destaque-no-ranking-dos-melhores-do-mundo-em-ciencias-da-computacao-1140x641.jpg"
    },
    {
      quote: "The computer was born to solve problems that did not exist before.",
      author: "Bill Gates",
      image: "https://www.computerhope.com/jargon/p/program.png"
    },
    {
      quote: "Computers are like a bicycle for our minds.",
      author: "Steve Jobs",
      image: "https://oaustech.edu.ng/media/k2/items/cache/5288462d048e0d3f60f64bb84cff6df4_M.jpg"
    },
    {
      quote: "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.",
      author: "Albert Einstein",
      image: "https://engineering.nyu.edu/sites/default/files/styles/content_header_default_1x/public/2022-02/nyu-edx-basics-computing-and-programming.jpg?h=1c9b88c9&itok=FTMIIHLX"
    },
  ];

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
        
      </FloatingCirclesWithChildren>
    </>
  );
}
