import Picture from "../../componentsForPages/image/Picture";
import Paragraph from "../../componentsForPages/paragraph/Paragraph";
import Buttons from "../../componentsForPages/buttons/Buttons";

function DatiInformazione() {
  return (
    <>
      <h1 className="text-central primary-color">2: Dati e Informazione</h1>

      <Paragraph 
        title="Introduzione" 
        text="Spesso le due parole informazioni e dati sono considerate sinonimi nel linguaggio comune, ma in realtà 
        non sono la stessa cosa. Nel mondo informatico hanno due significati completamente diversi, che è importante
        comprendere fin da subito."
      />

      <Paragraph 
        title="Cosa sono i Dati?" 
        text="I dati sono elementi grezzi, non interpretati, come numeri, parole, immagini o suoni. Essi non hanno 
        alcun significato fino a quando non vengono trattati. Per esempio, una lista di numeri o una sequenza di 
        caratteri rappresentano dati che possono essere analizzati e trasformati in informazione, ma di per sé non 
        comunicano nulla di utile."
      />

      <Paragraph 
        title="Cosa è l'Informazione?" 
        text="L'informazione è il risultato dell'elaborazione dei dati. Quando i dati vengono organizzati, analizzati 
         e interpretati, diventano utili per prendere decisioni o generare nuovi conoscimenti. Ad esempio, una serie di
         numeri che rappresentano la temperatura di diverse città, quando organizzata in un grafico, diventa 
         informazione facilmente interpretabile."
      />

      <Paragraph 
        title="Dati e Informazione: La Differenza" 
        text="La principale differenza tra dati e informazione sta nel significato che viene attribuito ai dati. 
        I dati sono valori di base che non hanno contesto, mentre l'informazione è il risultato dell'elaborazione e 
        organizzazione di questi dati, rendendoli utili. In un sistema informatico, i dati vengono prima acquisiti, 
        quindi elaborati per generare informazioni che possono essere utilizzate da software o utenti."
      />

      <Paragraph title="Esempio pratico" 
        text="Immaginiamo di avere un foglio con scritto sopra il numero 50. Questo è un semplice dato, senza contesto,
        perchè non ci comunica nessuna informazione reale che possiamo utilizzare. Per trasformare questo dato in 
        informazione dobbiamo avere il contesto, ovvero per esempio che stiamo parlando di limiti di velocità. In
        questo caso abbiamo un informazione completa e utile."/>

      <Picture path="https://www.seisette.it/wp-content/uploads/2016/03/DatoInformazione1.jpg"
        altText="Dati e informazioni immagine"/>

      <Buttons goBackButtonDisabled={false} backPath="/blog/concetti-fondamentali/sistemi-informatici" 
        nextPath="/blog/concetti-fondamentali/il-sistema-binario/"/>
    </>
  );
}

export default DatiInformazione;
