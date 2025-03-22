import Paragraph from '../../componentsForPages/paragraph/Paragraph';
import List from '../../componentsForPages/list/List';
import Buttons from '../../componentsForPages/buttons/Buttons';
import Picture from '../../componentsForPages/image/Picture';

function SecondaryMemory() {

  const secondaryMemoryFunctions = [
    { header: "Memoria non volatile", text: "La memoria secondaria è non volatile, il che significa che conserva i dati anche quando il computer è spento. Viene utilizzata per immagazzinare in modo permanente i dati, come il sistema operativo, i programmi e i file utente, a differenza della RAM che è volatile." },
    { header: "Capacità di archiviazione", text: "La memoria secondaria è progettata per offrire grandi capacità di archiviazione a un costo relativamente basso. Mentre la RAM offre velocità elevata, la memoria secondaria fornisce spazio sufficiente per conservare grandi quantità di dati a lungo termine." },
    { header: "Accesso sequenziale e casuale", text: "A differenza della RAM che ha accesso casuale ai dati, alcuni tipi di memoria secondaria, come i dischi rigidi, possono avere accesso sequenziale. Tuttavia, con l'avvento degli SSD (Solid State Drives), il tempo di accesso ai dati è notevolmente ridotto rispetto ai tradizionali hard disk." },
    { header: "Durabilità e affidabilità", text: "La memoria secondaria è progettata per durare nel tempo, con cicli di lettura e scrittura molto più elevati rispetto alla RAM. Gli SSD, ad esempio, non hanno parti mobili, il che li rende più resistenti agli urti e alle vibrazioni rispetto agli hard disk meccanici." },
    { header: "Tipi di memoria secondaria", text: "Esistono diversi tipi di memoria secondaria, tra cui hard disk (HDD), unità a stato solido (SSD), dischi ottici (CD, DVD) e unità flash (USB). Gli SSD offrono prestazioni superiori rispetto agli HDD grazie alla loro velocità di accesso ai dati." }
  ];

  const typesOfSecondaryMemory = [
    { header: "HDD (Hard Disk Drive)", text: "Gli hard disk sono dispositivi di memoria secondaria che utilizzano dischi magnetici rotanti per memorizzare i dati. Sebbene offrano grande capacità di archiviazione a un prezzo basso, sono più lenti e soggetti a guasti meccanici rispetto agli SSD." },
    { header: "SSD (Solid State Drive)", text: "Gli SSD sono dispositivi di memoria secondaria che utilizzano memorie flash per immagazzinare i dati, senza parti mobili. Sono molto più veloci degli HDD e offrono una maggiore resistenza agli urti, ma tendono ad essere più costosi." },
    { header: "Dischi ottici", text: "I dischi ottici come CD, DVD e Blu-ray sono utilizzati per memorizzare dati in modo permanente tramite la scrittura su dischi con tecnologia laser. Anche se non vengono più utilizzati tanto frequentemente per l'archiviazione quotidiana, sono ancora utilizzati per la distribuzione di software e film." },
    { header: "Unità flash", text: "Le unità flash, come le chiavette USB, sono dispositivi di memoria secondaria compatti e portatili che utilizzano la memoria flash per l'archiviazione dei dati. Sono veloci, resistenti e facilmente trasportabili, ma la capacità di archiviazione è inferiore rispetto a HDD e SSD." }
  ];

  return (
    <>
        <div>
            <h1 className="text-central primary-color">5: La Memoria Secondaria</h1>
        </div>

        <Paragraph title="Cos'è la memoria secondaria?" 
          text="La memoria secondaria si riferisce ai dispositivi di archiviazione permanente che conservano i dati anche quando il computer è spento. A differenza della memoria RAM, che è volatile e viene utilizzata per operazioni temporanee, la memoria secondaria è utilizzata per archiviare in modo permanente il sistema operativo, i programmi e i file utente." />

        <Paragraph title="Funzioni principali della memoria secondaria" text="La memoria secondaria è fondamentale per la conservazione dei dati a lungo termine. Di seguito sono riportate le sue principali caratteristiche:">
          <List listElements={secondaryMemoryFunctions} />
        </Paragraph>

        <Paragraph title="Tipi di memoria secondaria" text="Esistono vari tipi di memoria secondaria, ognuno con caratteristiche che lo rendono più adatto a determinate applicazioni. Ecco i principali tipi di memoria secondaria:">
          <List listElements={typesOfSecondaryMemory} />
        </Paragraph>

        <Picture path="https://www.diskpart.com/screenshot/en/others/others/hdd-vs-ssd.png"
            altText="Immagine di un disco rigido e un SSD"/>

        <Paragraph title="Vantaggi di un buon dispositivo di memoria secondaria" text="Avere un dispositivo di memoria secondaria adeguato può migliorare notevolmente le prestazioni del sistema, specialmente quando si tratta di velocità di accesso ai dati e capacità di archiviazione. Ecco alcuni dei vantaggi di avere una buona memoria secondaria:">
          <List listElements={[
            { header: "Maggiore velocità di lettura/scrittura", text: "Gli SSD offrono una velocità di accesso ai dati molto più elevata rispetto agli HDD, migliorando significativamente le prestazioni del sistema." },
            { header: "Maggiore capacità di archiviazione", text: "I dispositivi di memoria secondaria, in particolare gli HDD e SSD, offrono capacità molto più grandi rispetto alla RAM, consentendo di archiviare una quantità maggiore di dati." },
            { header: "Affidabilità a lungo termine", text: "La memoria secondaria è progettata per garantire l'affidabilità e la conservazione dei dati nel lungo periodo, con una durata superiore rispetto alla memoria volatile." }
          ]} />
        </Paragraph>

        <Buttons goBackButtonDisabled={false} backPath="/blog/componenti-computer/ram" 
          nextPath="/blog/componenti-computer/bus-di-sistema"/>
    </>
  )
}

export default SecondaryMemory;
