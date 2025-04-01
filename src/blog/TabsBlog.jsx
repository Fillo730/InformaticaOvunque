import { useState } from 'react';
import componentArchitectureArticles from './componentArchitectureArticles';
import mainConceptsArticles from './mainConceptsArticles';
import Article from './article/Article';
import './TabsBlog.css';

function TabsBlog() {
  const [activeTab, setActiveTab] = useState({value: "concepts", label: "Concetti Fondamentali"});

  return (
    <>
      <div className='tabs-container text-central'>
        <button className='tabs-button' onClick={() => setActiveTab({value: "concepts", label: "Concetti Fondamentali"})}>Concetti Fondamentali</button>
        <button className='tabs-button' onClick={() => setActiveTab({value: "components", label: "Componenti di un Computer"})}>Componenti di un Computer</button>
      </div>

      <div>
        <h1 class="text-central primary-color">{activeTab.label}</h1>
      </div>

      {activeTab.value === "concepts" && 
        <div className='div-articles'>
          {mainConceptsArticles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      }

      {activeTab.value === "components" && 
          <div className='div-articles'>
          {componentArchitectureArticles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      }
    </>
  );
}

export default TabsBlog;
