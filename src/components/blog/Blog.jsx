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
          <Article id="1" title="Archittettura di base" path="/blog/architettura-base"
              imageURL="https://i0.wp.com/semiengineering.com/wp-content/uploads/2018/09/Screen-Shot-2017-04-26-at-1.08.57-PM.png?ssl=1"/>
          <Article id="2" title="Come funziona il processore (CPU)" path="/blog/cpu"
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
