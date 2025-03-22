import Picture from "../../componentsForPages/image/Picture";
import Paragraph from "../../componentsForPages/paragraph/Paragraph";
import Buttons from "../../componentsForPages/buttons/Buttons";

function DatiInformazione() {
  return (
    <>
      <h1 className="text-central primary-color">3: Dati e Informazione</h1>

      <Paragraph 
        title="Introduzione" 
        text="Nel mondo informatico, 'dati' e 'informazione' sono concetti distinti ma strettamente legati. I dati rappresentano fatti, numeri o valori grezzi, privi di significato contestuale. L'informazione, invece, è il risultato dell'elaborazione di questi dati, che acquisiscono un significato utile e possono essere utilizzati per prendere decisioni o svolgere attività specifiche."
      />

      <Picture 
        path="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Data_Information_Knowledge_Wisdom_Classification_Chart.jpg/500px-Data_Information_Knowledge_Wisdom_Classification_Chart.jpg"
        altText="Differenza tra Dati e Informazione"
      />

      <Paragraph 
        title="Cosa sono i Dati?" 
        text="I dati sono elementi grezzi, non interpretati, come numeri, parole, immagini o suoni. Essi non hanno alcun significato fino a quando non vengono trattati. Per esempio, una lista di numeri o una sequenza di caratteri rappresentano dati che possono essere analizzati e trasformati in informazione, ma di per sé non comunicano nulla di utile."
      />

      <Paragraph 
        title="Cosa è l'Informazione?" 
        text="L'informazione è il risultato dell'elaborazione dei dati. Quando i dati vengono organizzati, analizzati e interpretati, diventano utili per prendere decisioni o generare nuovi conoscimenti. Ad esempio, una serie di numeri che rappresentano la temperatura di diverse città, quando organizzata in un grafico, diventa informazione facilmente interpretabile."
      />

      <Paragraph 
        title="Dati e Informazione: La Differenza" 
        text="La principale differenza tra dati e informazione sta nel significato che viene attribuito ai dati. I dati sono valori di base che non hanno contesto, mentre l'informazione è il risultato dell'elaborazione e organizzazione di questi dati, rendendoli utili. In un sistema informatico, i dati vengono prima acquisiti, quindi elaborati per generare informazioni che possono essere utilizzate da software o utenti."
      />

      <Paragraph 
        title="Organizzazione a Strati" 
        text="In un sistema informatico, dati e informazione non sono trattati direttamente e separatamente. Esiste una struttura a strati che permette di gestire i dati e l'informazione in modo modulare. I dati vengono raccolti, archiviati e trasmessi tra i vari livelli di un sistema, mentre l'informazione emerge solo quando i dati vengono elaborati da software o processi informatici. Questo approccio a strati consente una gestione più efficiente e una separazione chiara dei compiti tra acquisizione dei dati e loro elaborazione."
      />

      <Buttons goBackButtonDisabled={false} nextPath="/blog/concetti-fondamentali/il-sistema-binario/" />
    </>
  );
}

export default DatiInformazione;
