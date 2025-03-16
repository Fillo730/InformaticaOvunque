import { useState } from 'react';
import Article from './Article';
import './Blog.css'

function Blog() {
  const [activeTab, setActiveTab] = useState('baseArchitecture');

  return (
    <>
      <div>
        <h1 className='text-central primary-color'>L'informatica come non l'hai mai vista</h1>
      </div>

      <div className='text-central'>
        <button onClick={() => setActiveTab('baseArchitecture')}>Componenti di un computer</button>
        <button onClick={() => setActiveTab('operativeSystems')}>Sistemi Operativi</button>
      </div>

      {activeTab === "baseArchitecture" && (
        <div className='div-articles'>
          <Article id="1" title="Archittettura di base"  
              imageURL="https://media.geeksforgeeks.org/wp-content/uploads/basic_structure.png"/>
          <Article id="2" title="Come funziona il processore (CPU)"
              imageURL="https://cdni.iconscout.com/illustration/premium/thumb/cpu-processor-chip-illustration-download-in-svg-png-gif-file-formats--gpu-science-technology-illustrations-2862658.png"/>
        </div>
      )}

      {activeTab === 'operativeSystems' && (
        <div className='div-articles'>
          
        </div>
      )}
    </>
  );
}

export default Blog;
