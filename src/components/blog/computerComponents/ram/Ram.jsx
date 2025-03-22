import Paragraph from '../../componentsForPages/paragraph/Paragraph';
import List from '../../componentsForPages/list/List';
import Buttons from '../../componentsForPages/buttons/Buttons';
import Picture from '../../componentsForPages/image/Picture';

function Ram() {

  const ramFunctions = [
    { header: "Memoria volatile", text: "La RAM è una memoria volatile, il che significa che perde i dati quando il computer viene spento. Viene utilizzata per immagazzinare temporaneamente i dati e le istruzioni a cui il processore ha bisogno di accedere rapidamente durante l'esecuzione di programmi. Quando il computer è acceso, la CPU carica i dati necessari dalla memoria di massa (hard disk o SSD) nella RAM, che è molto più veloce da accedere." },
    { header: "Accesso casuale", text: "Il termine 'random access' (accesso casuale) significa che ogni singolo byte di memoria può essere accessibile in modo diretto e indipendente, ovvero senza dover passare attraverso altre locazioni. Questo permette al processore di leggere e scrivere dati in modo molto veloce, senza dover sequenzialmente scorrere la memoria come accadrebbe con altre tipologie di memoria." },
    { header: "Velocità e prestazioni", text: "La RAM è estremamente veloce rispetto ad altri tipi di memoria, come i dischi rigidi o le SSD. La sua alta velocità è cruciale per migliorare le prestazioni generali del computer, permettendo al processore di recuperare rapidamente le informazioni necessarie senza blocchi o ritardi." },
    { header: "Tipi di RAM", text: "Esistono vari tipi di RAM, ciascuno progettato per rispondere a specifiche esigenze di prestazioni. I tipi più comuni sono: DRAM (Dynamic RAM), che è più lenta ma più economica, e SRAM (Static RAM), che è più veloce ma più costosa. Inoltre, all'interno dei computer moderni si trovano anche memorie DDR (Double Data Rate), che offrono velocità ancora più elevate." },
    { header: "La RAM e la CPU", text: "La RAM gioca un ruolo fondamentale nel miglioramento delle prestazioni complessive della CPU. Quando la CPU esegue programmi, i dati e le istruzioni vengono caricati dalla memoria secondaria (hard disk o SSD) nella RAM. La CPU può quindi accedere a questi dati molto più rapidamente, evitando il rallentamento che sarebbe causato dall'accesso diretto alla memoria di archiviazione." }
  ];

  const typesOfRam = [
    { header: "DRAM (Dynamic RAM)", text: "La DRAM è un tipo di RAM che utilizza condensatori per memorizzare i dati. Ogni cella di memoria è costituita da un transistor e un condensatore, che devono essere costantemente ricaricati per mantenere i dati. La DRAM è economica e utilizzata principalmente nei computer e nei dispositivi mobili." },
    { header: "SRAM (Static RAM)", text: "A differenza della DRAM, la SRAM utilizza una serie di transistor per immagazzinare i dati. Non ha bisogno di essere ricaricata come la DRAM e offre accessi più veloci. Tuttavia, la SRAM è più costosa e consuma più energia, quindi viene utilizzata principalmente per cache e applicazioni ad alta velocità." },
    { header: "DDR (Double Data Rate)", text: "Le memorie DDR sono una versione evoluta della DRAM, che consentono di trasferire dati su entrambe le fasi di clock, raddoppiando la velocità di trasferimento rispetto alle memorie convenzionali. Le versioni più recenti, come DDR4 e DDR5, offrono prestazioni significativamente più elevate e maggiore efficienza energetica." }
  ];

  return (
    <>
        <div>
            <h1 className="text-central primary-color">4: La Memoria RAM</h1>
        </div>

        <Paragraph title="Cos'è la RAM?" 
          text="La RAM (Random Access Memory) è una memoria di lavoro utilizzata dai computer e da altri dispositivi elettronici per immagazzinare temporaneamente i dati e le istruzioni a cui il processore ha bisogno di accedere rapidamente. A differenza della memoria di archiviazione permanente (come hard disk o SSD), la RAM è volatile e perde i dati una volta che il dispositivo viene spento. La sua alta velocità è essenziale per il funzionamento efficiente dei sistemi informatici." />

        <Picture path="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F1805901-01?pgw=1"
            altText="Immagine di una scheda di memoria RAM"/>

        <Paragraph title="Funzioni principali della RAM" text="La RAM svolge funzioni fondamentali per il funzionamento del sistema informatico. Di seguito sono riportate le sue principali caratteristiche:">
          <List listElements={ramFunctions} />
        </Paragraph>

        <Paragraph title="Tipi di RAM" text="Esistono diverse tipologie di RAM, ognuna con caratteristiche specifiche che le rendono adatte a determinati scopi. Ecco i principali tipi di RAM:">
          <List listElements={typesOfRam} />
        </Paragraph>

        <Paragraph title="Come la RAM influenza le prestazioni della CPU" text="La RAM è strettamente collegata alle prestazioni della CPU. Più memoria RAM è disponibile, maggiore è la quantità di dati che possono essere archiviati temporaneamente durante l'esecuzione dei programmi, riducendo la necessità di accedere continuamente alla memoria di massa (SSD o HDD). In assenza di sufficiente RAM, il sistema potrebbe rallentare significativamente, poiché il processore si vede costretto a utilizzare il file di swap su disco, che è molto più lento." />

        <Paragraph title="Vantaggi di una buona quantità di RAM" text="Avere una quantità adeguata di RAM può portare numerosi vantaggi, tra cui:">
          <List listElements={[
            { header: "Maggiore velocità di elaborazione", text: "Più RAM consente alla CPU di gestire simultaneamente un numero maggiore di operazioni senza dover ricorrere alla memoria di massa." },
            { header: "Miglioramento delle prestazioni multitasking", text: "Con più RAM, il sistema è in grado di eseguire più applicazioni contemporaneamente senza rallentamenti." },
            { header: "Migliore gestione dei dati complessi", text: "Applicazioni come giochi, software di grafica e video editing richiedono una grande quantità di RAM per gestire file e operazioni complessi senza compromettere le prestazioni." }
          ]} />
        </Paragraph>

        <Buttons goBackButtonDisabled={false} backPath="/blog/componenti-computer/cpu-pipeline" 
          nextPath="/blog/componenti-computer/memoria-secondaria"/>
    </>
  )
}

export default Ram;
