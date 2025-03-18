import Picture from "../../componentsForPages/image/Picture";
import List from "../../componentsForPages/list/List";
import Paragraph from "../../componentsForPages/paragraph/Paragraph";
import Buttons from "../../componentsForPages/buttons/Buttons";

function ArchitetturaBase() {
  return (
    <>
      <h1 className="text-central primary-color">1: Architettura di Von Neumann</h1>

      <Paragraph 
        title="Introduzione" 
        text="L'architettura di Von Neumann è un modello di progettazione hardware per computer digitali in cui dati e istruzioni condividono lo stesso spazio di memoria. 
              Questo approccio si contrappone all'architettura Harvard, che separa fisicamente i due tipi di memoria. Ideata dal matematico ungherese John von Neumann, 
              questa architettura ha rivoluzionato il mondo dell'informatica ed è ancora oggi alla base della maggior parte dei moderni computer." 
      />

      <Picture 
        path="https://i0.wp.com/semiengineering.com/wp-content/uploads/2018/09/Screen-Shot-2017-04-26-at-1.08.57-PM.png?ssl=1"
        altText="Diagramma dell'architettura di Von Neumann"
      />

      <Paragraph title="Descrizione" text="L'architettura di Von Neumann è costituita da quattro componenti fondamentali:">
        <List 
          listElements={[ 
            { header: "CPU", text: "L'unità centrale di elaborazione, che esegue le istruzioni e coordina tutte le operazioni." },
            { header: "Memoria", text: "Archivia sia i dati che i programmi in esecuzione." },
            { header: "Interfacce di I/O", text: "Consentono la comunicazione tra il computer e i dispositivi esterni." },
            { header: "Bus di sistema", text: "Canali che trasportano dati e segnali di controllo tra i vari componenti." }
          ]} 
        />
      </Paragraph>

      <Paragraph title="CPU" text="La CPU (Central Processing Unit) è il cuore del computer, responsabile dell'esecuzione delle istruzioni e della gestione del flusso di dati.">
        <List 
          listElements={[ 
            { header: "ALU", text: "L'unità logico-aritmetica che esegue operazioni matematiche e logiche." },
            { header: "CU", text: "L'unità di controllo che dirige il flusso dei dati e coordina le operazioni tra i componenti." }
          ]} 
        />
      </Paragraph>

      <Paragraph title="Memoria" text="La memoria è essenziale per il funzionamento del computer e si divide in due categorie principali:">
        <List 
          listElements={[ 
            { header: "Memoria principale", text: "Memoria volatile (RAM) utilizzata per l'elaborazione temporanea dei dati." },
            { header: "Memoria di massa", text: "Memoria non volatile (HDD, SSD) usata per l'archiviazione permanente." }
          ]} 
        />
      </Paragraph>

      <Paragraph 
        title="Interfacce di I/O" 
        text="Le interfacce di input/output collegano il computer al mondo esterno. I dispositivi di input (come tastiere e mouse) 
              permettono di inserire dati, mentre quelli di output (monitor, stampanti) visualizzano le informazioni elaborate." 
      />
      
      <Paragraph title="Bus di sistema" text="Il bus di sistema consente il trasferimento di dati tra i vari componenti del computer. Si suddivide in:">
        <List 
          listElements={[ 
            { header: "Bus dati", text: "Trasporta le informazioni tra la CPU, la memoria e gli altri dispositivi." },
            { header: "Bus indirizzi", text: "Trasporta gli indirizzi di memoria necessari per l’accesso ai dati." },
            { header: "Bus di controllo", text: "Gestisce i segnali di sincronizzazione e il coordinamento delle operazioni." }
          ]} 
        />
      </Paragraph>

      <Buttons goBackButtonDisabled={true} nextPath="/blog/cpu" backPath="" />
    </>
  );
}

export default ArchitetturaBase;
