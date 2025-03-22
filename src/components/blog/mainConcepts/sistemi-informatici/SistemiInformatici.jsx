import Picture from "../../componentsForPages/image/Picture";
import List from "../../componentsForPages/list/List";
import Paragraph from "../../componentsForPages/paragraph/Paragraph";
import Buttons from "../../componentsForPages/buttons/Buttons";

function SistemiInformatici() {
  return (
    <>
      <h1 className="text-central primary-color">2: Sistemi Informatici: Hardware e Software</h1>

      <Paragraph 
        title="Introduzione" 
        text="Un sistema informatico è un insieme di componenti hardware e software che collaborano per eseguire operazioni e risolvere problemi. 
              L'hardware rappresenta la parte fisica del computer, mentre il software è costituito dai programmi che ne gestiscono il funzionamento. 
              Insieme, questi due elementi formano il nucleo di ogni dispositivo informatico."
      />

      <Picture 
        path="https://vitolavecchia.altervista.org/wp-content/uploads/2018/06/Caratteristiche-e-differenze-tra-Hardware-e-Software-del-computer.png"
        altText="Rappresentazione di un sistema informatico"
      />

      <Paragraph title="Hardware" text="L'hardware di un sistema informatico include tutte le componenti fisiche, dalle unità di elaborazione ai dispositivi di input e output.">
        <List 
          listElements={[ 
            { header: "Unità centrale di elaborazione (CPU)", text: "Il cuore del sistema, che esegue i calcoli e gestisce i dati." },
            { header: "Memoria", text: "Dispositivi che conservano i dati temporaneamente o permanentemente (RAM, HDD, SSD)." },
            { header: "Dispositivi di I/O", text: "Tastiere, mouse, monitor, stampanti: permettono l'interazione tra utente e computer." },
            { header: "Scheda madre", text: "La parte che collega e coordina tutti i componenti hardware." }
          ]} 
        />
      </Paragraph>

      <Paragraph title="Software" text="Il software è l'insieme dei programmi che gestiscono l'interazione tra hardware e utente. Senza software, l'hardware non avrebbe funzionalità.">
        <List 
          listElements={[ 
            { header: "Sistemi operativi", text: "Gestiscono le risorse hardware, permettendo l'esecuzione di applicazioni e la gestione dei dati." },
            { header: "Software applicativo", text: "Programmi destinati a soddisfare esigenze specifiche, come la navigazione web, la scrittura o il design grafico." },
            { header: "Software di utilità", text: "Strumenti che ottimizzano il funzionamento del computer, come antivirus e strumenti di backup." }
          ]} 
        />
      </Paragraph>

      <Paragraph 
        title="Interazione tra Hardware e Software" 
        text="L'interazione tra hardware e software è essenziale per il funzionamento di qualsiasi sistema informatico. Il software comunica con l'hardware per eseguire operazioni, e l'hardware fornisce i dati necessari al software per completare i compiti richiesti." 
      />

      <Paragraph 
        title="Organizzazione a Strati" 
        text="L'interazione tra hardware e software non avviene direttamente. Invece, esiste un'architettura organizzata a strati, dove ogni strato si occupa di un compito specifico. 
              In questo modello, il software interagisce con uno strato intermedio, come il sistema operativo, che a sua volta comunica con l'hardware. 
              Questo approccio a strati offre maggiore modularità, semplifica la gestione delle risorse e consente ai vari componenti di evolversi indipendentemente senza compromettere l'intero sistema."
      />

      <Buttons goBackButtonDisabled={false} nextPath="/blog/concetti-fondamentali/dati-informazione/"/>
    </>
  );
}

export default SistemiInformatici;
