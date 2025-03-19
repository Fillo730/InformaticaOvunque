import Paragraph from '../../componentsForPages/paragraph/Paragraph';
import List from '../../componentsForPages/list/List';
import Buttons from '../../componentsForPages/buttons/Buttons';
import Picture from '../../componentsForPages/image/Picture';

function PipelineCpu() {

  const pipelineStages = [
    { header: "Fase di Fetch", text: "Recupero dell'istruzione dalla memoria utilizzando l'indirizzo fornito dal Program Counter (PC). Il Program Counter viene poi aggiornato per puntare all'istruzione successiva." },
    { header: "Fase di Decode", text: "L'istruzione recuperata viene decodificata dalla Unità di Controllo (CU), che determina l'operazione da eseguire e gli operandi necessari." },
    { header: "Fase di Execute", text: "L'ALU esegue l'operazione specificata dall'istruzione. Gli operandi vengono prelevati dai registri e i risultati vengono elaborati." },
    { header: "Fase di Memory Access", text: "Se l'istruzione richiede un accesso alla memoria, questa fase legge o scrive i dati necessari." },
    { header: "Fase di Write-back", text: "I risultati dell'operazione vengono scritti nei registri o nella memoria, completando così l'esecuzione dell'istruzione." }
  ];

  return (
    <>
        <div>
            <h1 className="text-central primary-color">3: La Pipeline della CPU</h1>
        </div>

        <Paragraph title="Cos'è la Pipeline della CPU?" 
          text="La pipeline della CPU è un'architettura che permette l'elaborazione simultanea di più istruzioni, migliorando le prestazioni del processore. Ogni istruzione passa attraverso una serie di fasi (Fetch, Decode, Execute, Memory Access, Write-back), che possono essere eseguite in parallelo per ridurre i tempi di attesa e aumentare la velocità complessiva del processore." />

        <Picture path="https://microchip.wdfiles.com/local--files/32bit:mx-arch-pipeline/pic32mx-pipelined-execution.png"
            altText="Immagine Pipeline della CPU"/>

        <Paragraph title="Fasi della Pipeline" text="La pipeline CPU è composta da diverse fasi principali, che vengono eseguite in sequenza, ma ogni fase può lavorare su una parte diversa dell'istruzione in parallelo con le altre. Ecco le fasi principali:">
          <List listElements={pipelineStages} />
        </Paragraph>

        <Paragraph title="Perché la Pipeline è importante?" 
          text="La pipeline è cruciale perché consente alla CPU di ridurre il tempo necessario per eseguire un programma. Anziché aspettare che una singola istruzione sia completamente eseguita prima di iniziare la successiva, ogni fase del ciclo di vita di un'istruzione viene elaborata separatamente e in parallelo. Questo approccio migliora le prestazioni e ottimizza l'utilizzo delle risorse hardware, portando ad un'elaborazione più veloce e a un maggiore throughput del sistema." />

        <Paragraph title="Implicazioni di Performance" 
          text="L'implementazione della pipeline nella CPU permette di raggiungere performance molto elevate. Con la pipeline, più istruzioni vengono elaborate contemporaneamente, riducendo drasticamente i tempi di esecuzione di un programma. Questo è particolarmente utile nelle applicazioni ad alte prestazioni, come il gaming, l'elaborazione di dati scientifici, e altre situazioni che richiedono una CPU veloce e reattiva." />

        <Paragraph title="Problemi della Pipeline" 
          text="Nonostante i numerosi vantaggi, la pipeline può anche incontrare alcuni problemi. Uno dei principali è la dipendenza tra le istruzioni, che può causare rallentamenti. Ad esempio, se un'istruzione dipende dal risultato di una precedente (una 'data hazard'), la CPU dovrà aspettare che questa venga completata, bloccando temporaneamente la pipeline. Altri problemi includono le 'control hazards', che si verificano quando un'istruzione di salto cambia il flusso del programma." />

        <Paragraph title="Vantaggi della Pipeline" text="L'uso della pipeline nella CPU porta numerosi vantaggi, tra cui:">
            <List listElements={[ 
                { header: "Miglioramento delle prestazioni", text: "Le fasi di fetch, decode, execute, e memory access possono essere eseguite in parallelo, riducendo il tempo totale per l'elaborazione delle istruzioni." },
                { header: "Maggiore efficienza", text: "Ogni ciclo di clock può essere sfruttato al massimo, poiché diverse fasi lavorano contemporaneamente su istruzioni diverse." },
                { header: "Riduzione del tempo di latenza", text: "La CPU può continuare a lavorare su nuove istruzioni mentre altre fasi della pipeline completano le istruzioni precedenti." }
            ]}/>
        </Paragraph>

        <Buttons goBackButtonDisabled={false} backPath="/blog/cpu" nextPath="/blog/ram"/>
    </>
  )
}

export default PipelineCpu;
