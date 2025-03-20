import Paragraph from '../../componentsForPages/paragraph/Paragraph';
import List from '../../componentsForPages/list/List';
import Buttons from '../../componentsForPages/buttons/Buttons';
import SwiperComponent from '../../componentsForPages/swiper/SwiperComponent';
import Picture from '../../componentsForPages/image/Picture';

function Cpu() {
  
  const slideData = [
    {
      title: "L'Unità di Controllo (CU)",
      text: "L'Unità di Controllo è il cervello della CPU, che si occupa di dirigere il flusso delle istruzioni all'interno della macchina. Essa interpreta le istruzioni provenienti dalla memoria e coordina le operazioni tra le altre unità della CPU, come l'ALU, i registri e la cache. L'unità di controllo decide quale operazione eseguire in ogni ciclo di clock, assicurandosi che le operazioni vengano eseguite nell'ordine corretto.",
    },
    {
      title: "L'Unità Logico-Aritmetica (ALU)",
      text: "L'Unità Logico-Aritmetica (ALU) è responsabile per l'esecuzione delle operazioni aritmetiche e logiche. Le operazioni aritmetiche includono somme, sottrazioni, moltiplicazioni e divisioni, mentre le operazioni logiche comprendono AND, OR, NOT e XOR. L'ALU riceve i dati dai registri e, dopo aver eseguito l'operazione, invia i risultati ai registri o alla memoria.",
    },
    {
      title: "I Registri",
      text: "I registri sono piccole aree di memoria ad alta velocità che si trovano all'interno della CPU. Vengono utilizzati per memorizzare temporaneamente i dati e le istruzioni durante l'esecuzione di un programma. Esempi di registri includono:",
      list: [
        { header: "Program Counter (PC)", text: "Memorizza l'indirizzo della prossima istruzione da eseguire." },
        { header: "Memory Address Register (MAR)", text: "Contiene l'indirizzo di memoria da cui leggere o a cui scrivere dati." },
        { header: "Memory Data Register (MDR)", text: "Memorizza i dati da scrivere nella memoria o i dati letti dalla memoria." },
        { header: "Instruction Register (IR)", text: "Contiene l'istruzione attualmente in esecuzione." },
        { header: "Status Register (SR)", text: "Contiene flag che indicano lo stato dell'ultima operazione eseguita, come overflow, zero, carry, ecc." },
        { header: "Stack Pointer (SP)", text: "Punta all'elemento corrente nello stack, utilizzato per la gestione delle chiamate di funzione e delle variabili locali." }
      ]
    },
    {
      title: "La Cache",
      text: "La cache è una memoria ad alta velocità che si trova tra la CPU e la memoria principale (RAM). Essa conserva i dati e le istruzioni più frequentemente utilizzati dalla CPU, riducendo così i tempi di accesso alla memoria principale. Ci sono diversi livelli di cache (L1, L2, L3), con la L1 che è la più veloce ma di dimensioni più piccole, e la L3 che è più lenta ma di dimensioni maggiori. La cache migliora notevolmente le prestazioni della CPU, evitando di dover recuperare continuamente i dati dalla RAM.",
    },
    {
      title: "Il Bus di Dati",
      text: "Il Bus di Dati è il canale attraverso cui la CPU trasferisce i dati tra le varie componenti interne e con la memoria o altre periferiche. Esso è costituito da linee di comunicazione che trasportano i dati sotto forma di segnali elettrici. Esistono diversi tipi di bus: bus di dati (per il trasferimento dei dati), bus di indirizzo (per specificare l'indirizzo di memoria) e bus di controllo (per sincronizzare le operazioni tra i vari componenti). La velocità del bus influisce direttamente sulle performance della CPU.",
    },
    {
      title: "Il Clock",
      text: "Il clock è un circuito elettronico che fornisce un segnale temporale regolare per sincronizzare tutte le operazioni della CPU. Ogni ciclo di clock rappresenta una frazione di tempo durante la quale la CPU esegue un'operazione. La velocità del clock, espressa in Hertz (Hz), determina quante operazioni la CPU può eseguire al secondo. Più alta è la velocità del clock, maggiore è la capacità di elaborazione della CPU, anche se altri fattori come l'architettura e il numero di core influenzano anch'essi le prestazioni.",
    }
  ];

  const executionCycleSteps = [
    { header: "Fase di Fetch", text: "La CPU recupera l'istruzione dalla memoria, utilizzando l'indirizzo fornito dal Program Counter (PC). Questo passaggio implica l'accesso alla memoria e il trasferimento dell'istruzione al registro delle istruzioni." },
    { header: "Fase di Decode", text: "L'istruzione recuperata viene decodificata dall'Unità di Controllo (CU), che determina l'operazione da eseguire e identifica gli operandi necessari." },
    { header: "Fase di Execute", text: "L'ALU esegue l'operazione specificata dall'istruzione, utilizzando gli operandi individuati. I risultati possono essere scritti nei registri o nella memoria." },
    { header: "Fase di Write-back", text: "I risultati dell'operazione vengono scritti nel registro di destinazione o nella memoria, completando il ciclo." }
  ];
  
  return (
    <>
        <div>
            <h1 className="text-central primary-color">1: Come funziona il processore (CPU)</h1>
        </div>

        <Paragraph title="Cos'è?" 
          text="La CPU (Central Processing Unit) è il cuore del sistema informatico, spesso paragonata al cervello di un organismo vivente. 
          Essa si occupa di eseguire i programmi e gestire l'elaborazione dei dati. La CPU carica le informazioni dalla memoria secondaria (come il disco rigido o SSD) alla memoria principale (RAM), 
          legge ed esegue le istruzioni, e salva i risultati di nuovo nella memoria. Oltre a gestire l'esecuzione dei programmi, coordina le operazioni tra i vari componenti del computer, 
          come la memoria, la scheda grafica e le periferiche di input/output."/>

          <Picture path="https://image-v2.cdn.app.senecalearning.com/2019-11/b9ea0541-4878-4213-928a-0ee3659ff4cb/CPU-min,h_400,q_80,w_640.png"
            altText="Immagine CPU"/>

        <Paragraph title="Struttura" text="La CPU è composta da alcuni componenti fondamentali, tra cui:">
        <List listElements={[
            {header: "L'Unità di Controllo (CU)", text: "Gestisce il flusso delle istruzioni e coordina le operazioni tra le altre unità."},
            {header: "L'Unità Logico-Aritmetica (ALU)", text: "Esegue le operazioni aritmetiche e logiche, come somme, sottrazioni e confronti."},
            {header: "I Registri", text: "Piccole aree di memoria all'interno della CPU utilizzate per immagazzinare temporaneamente i dati e le istruzioni durante l'elaborazione."},
            {header: "La Cache", text: "Una memoria ad alta velocità che conserva i dati e le istruzioni più frequentemente utilizzati, per velocizzare l'accesso e migliorare le performance."},
            {header: "Il Bus di Dati", text: "Consente il trasferimento delle informazioni tra i vari componenti della CPU e gli altri dispositivi del computer."},
            {header: "Il Clock", text: "È il componente che sincronizza tutte le operazioni della CPU, fornendo un segnale temporale regolare per coordinare l'esecuzione delle istruzioni."}
        ]}/>
        </Paragraph>
      
        <SwiperComponent slides={slideData}/>

        <Paragraph title="Ciclo di esecuzione" text="Il ciclo di esecuzione della CPU descrive le fasi attraverso le quali la CPU elabora le istruzioni. Un ciclo completo comprende:">
            <List listElements={executionCycleSteps} />
        </Paragraph>

        <Buttons goBackButtonDisabled={true} nextPath="/blog/componenti-computer/cpu-pipeline"/>
    </>
  )
}

export default Cpu;


