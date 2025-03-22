import { useState } from 'react';
import componentArchitectureArticles from './computerComponents/componentArchitectureArticles';
import mainConceptsArticles from './mainConcepts/mainConceptsArticles';
import Article from './Article';
import './Blog.css';

function Blog() {
  const [activeTab, setActiveTab] = useState('concettiFondamentali');

  return (
    <>
      <div className='tabs-container text-central'>
        <button onClick={() => setActiveTab('concettiFondamentali')}>Concetti Fondamentali</button>
        <button onClick={() => setActiveTab('baseArchitecture')}>Componenti di un Computer</button>
        <button onClick={() => setActiveTab('operativeSystems')}>Sistemi Operativi</button>
        <button onClick={() => setActiveTab('Internet')}>Internet</button>
      </div>

      {activeTab === "concettiFondamentali" && 
        <div className='div-articles'>
          {mainConceptsArticles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      }

      {activeTab === "baseArchitecture" && 
          <div className='div-articles'>
          {componentArchitectureArticles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      }

      {activeTab === "operativeSystems" && 
        <div className='div-articles'>
          
        </div>
      }

      {activeTab === "Internet" && 
        <div className='div-articles'>
          
        </div>
      }
    </>
  );
}

export default Blog;
