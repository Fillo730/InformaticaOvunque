import ScrollableLinesWithChildren from '../../animations/scroll-lines/ScrollableLinesWithChildren';
import CollisionButton from '../generalComponents/button/CollisionButton';
import CuriosityCard from './curiosityCard/CuriosityCard';
import quotes from './objects/quotes';
import curiosities from './objects/curiosities';
import QuoteSwiper from './quoteSwiper/QuoteSwiper';
import '../../styles/global.css';
import './Home.css';

export default function Home() {
  return (
    <>

      <ScrollableLinesWithChildren>
        <div>
          <h1 className="text-central primary-color">L'informatica come non l'hai mai vista</h1>
        </div>
        <QuoteSwiper quotes={quotes} />

        <div className='greetings-container'>
          <div>
            <h1 className='primary-color text-central'>Benvenuto a Informatica Ovunque</h1>
            <p className='greetings-container-text'>
              E se ti facessi vedere che l'informatica è alla <label>portata di tutti</label> e che potresti imparare tantissime
              cose nuove cosa mi diresti? Come? Sono pazzo? Bhè, non credermi sulla parola e scoprilo tu stesso.
            </p>
          </div>
          <CollisionButton path="/blog" text="Scopri di più" />
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

      </ScrollableLinesWithChildren>
    </>
  );
}
