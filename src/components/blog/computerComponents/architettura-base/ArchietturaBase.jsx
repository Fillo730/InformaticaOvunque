import '../../../../styles/global.css'
import '../../../../styles/BlogPagesCss.css'


function ArchitetturaBase() {
  return (
    <>
      <div>
        <h1 className='text-central primary-color'>1: Architettura di Von Neumann</h1>
      </div>
      <div className='container'>

        <h2 className='section-title primary-color text-central'>Introduzione</h2>
        <p className='content-paragraph'>
          L'architettura di Von Neumann è una tipologia di architettura hardware per computer digitali con la caratteristica di avere i programmi
          e le relative istruzioni nello stesso spazio di memoria, contrapponendosi ad un'altra architettura denominata Harvard, dove invece i 
          programmi e le istruzioni sono salvati in memorie distinte. È stata ideata dal matematico e informatico ungherese John von Neumann, una 
          delle menti più celebri del '900.
        </p>

        <img src='https://i0.wp.com/semiengineering.com/wp-content/uploads/2018/09/Screen-Shot-2017-04-26-at-1.08.57-PM.png?ssl=1' 
        alt="Immagine architettura di Von Neumann" className='responsive-image'/>

        <h2 className='section-title primary-color text-central'>Descrizione</h2>
        <p className='content-paragraph'>
          Questa tipologia di architettura è composta da 4 componenti principali:
          <ul className='content-list'>
            <li><strong>CPU</strong>: L'unità centrale di elaborazione, che gestisce il flusso di dati e comandi</li>
            <li><strong>Memoria</strong>: Dove vengono archiviati i dati e le istruzioni da eseguire</li>
            <li><strong>Interfacce di I/O</strong>: Per la comunicazione con dispositivi esterni (input/output)</li>
            <li><strong>Bus di sistema</strong>: I canali attraverso cui i dati vengono trasferiti tra i componenti</li>
          </ul>
        </p>

        <h2 className='section-title primary-color text-central'>CPU</h2>
        <p className='content-paragraph'>
          La CPU (Central Processing Unit) è l'unità centrale di elaborazione e può essere considerata il cervello del computer. Si occupa di
          leggere le istruzioni dalla memoria, decodificarle ed eseguirle, coordinando anche tutti gli altri componenti del sistema. È formata
          a sua volta da due componenti principali:
          <ul className='content-list'>
            <li><strong>ALU</strong> (Arithmetic Logic Unit): Si occupa di eseguire operazioni aritmetiche e logiche. L'ALU esegue calcoli matematici come addizione, sottrazione, moltiplicazione, divisione, e operazioni logiche come AND, OR, e NOT.</li>
            <li><strong>CU</strong> (Control Unit): Si occupa di controllare il funzionamento di tutte le altre componenti del sistema. La CU coordina il flusso di dati tra la CPU, la memoria e le altre periferiche attraverso segnali di controllo.</li>
          </ul>
        </p>

        <h2 className='section-title primary-color text-central'>Memoria</h2>
        <p className='content-paragraph'>
          La memoria è una delle componenti cruciali dell'architettura di Von Neumann. Viene utilizzata per immagazzinare sia i dati che le istruzioni da eseguire. La memoria può essere suddivisa in due principali categorie:
          <ul className='content-list'>
            <li><strong>Memoria principale</strong>: Questa è la memoria volatile, come la RAM, che viene utilizzata per archiviare dati temporanei e istruzioni durante l'esecuzione del programma.</li>
            <li><strong>Memoria di massa</strong>: Questa è la memoria non volatile, come i dischi rigidi o SSD, che immagazzina dati anche quando il computer è spento.</li>
          </ul>
        </p>

        <h2 className='section-title primary-color text-central'>Interfaccie di I/O</h2>
        <p className='content-paragraph'>
          Le interfacce di input/output (I/O) sono i punti di collegamento tra il computer e il mondo esterno. Gli input vengono raccolti 
          tramite dispositivi come tastiere, mouse, scanner, mentre gli output vengono visualizzati su schermi o stampanti. Le interfacce di I/O 
          consentono al computer di comunicare con l'ambiente circostante, ricevendo dati e fornendo risultati.
        </p>

        <h2 className='section-title primary-color text-central'>Bus di sistema</h2>
        <p className='content-paragraph'>
          Il bus di sistema è un insieme di linee di comunicazione che permette il trasferimento di dati tra i vari componenti del computer. Si suddivide in tre tipologie:
          <ul className='content-list'>
            <li><strong>Bus dati</strong>: Trasporta i dati effettivi tra la memoria e la CPU o altri dispositivi.</li>
            <li><strong>Bus indirizzi</strong>: Trasporta gli indirizzi di memoria utilizzati dalla CPU per leggere e scrivere dati.</li>
            <li><strong>Bus di controllo</strong>: Gestisce i segnali di controllo che sincronizzano e coordinano le operazioni tra le varie componenti del sistema.</li>
          </ul>
        </p>

        <div className='container-link'>
          <a href='/blog' className='link-button'>Torna indietro</a>
          <div className='gap'>
            <a href='/blog/cpu' className='link-button disabled-link' disabled>Indietro</a>
            <a href='/blog/cpu' className='link-button'>Avanti</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArchitetturaBase;
