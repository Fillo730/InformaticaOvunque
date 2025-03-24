import Picture from "../../componentsForPages/image/Picture";
import List from "../../componentsForPages/list/List";
import Paragraph from "../../componentsForPages/paragraph/Paragraph";
import Buttons from "../../componentsForPages/buttons/Buttons";
import { text } from "framer-motion/client";

function Algoritmi() {
  return (
    <>
      <h1 className="text-central primary-color">5: Algoritmi</h1>

      <Paragraph 
        title="Introduzione"
        text="Un algoritmo è una sequenza finita di istruzioni, ben definite e ordinate, che permettono di risolvere 
        un problema in un tempo limitato. Gli algoritmi sono alla base di tutte le operazioni che compiamo nel mondo 
        digitale, dalle ricerche su Internet alla gestione dei dati. Ogni algoritmo deve essere: ">
            <List listElements={[
                {header: "Finito", text:"deve essere composto da un numero finito di passi e deve terminare"},
                {header: "Deterministico", text:"dati gli stessi dati in ingresso, si devono ottenere gli stessi risultati in uscita"},
                {header: "Non ambiguo", text:"le operazioni devono essere ben definite e non devono poter essere interpretate in maniera diversa"},
                {header: "Generale", text:"deve poter essere applicabile a tutta la classe di problemi a cui si riferisce"},
            ]}/>    
        </Paragraph>

        <Paragraph 
            title="La Complessità degli Algoritmi"
            text="La complessità degli algoritmi è una misura che esprime quanto un algoritmo sia efficiente in termini di 
            risorse computazionali, come il tempo e la memoria, in funzione della dimensione dell'input. Due dei 
            principali aspetti della complessità sono la complessità temporale e la complessità spaziale. 
            La complessità temporale indica quanto tempo un algoritmo impiega per completare l'elaborazione in 
            relazione alla dimensione dell'input, ed è spesso espressa tramite la notazione Big O 
            (ad esempio, O(n), O(n^2), O(log n), ecc.). La complessità spaziale, invece, misura la quantità di memoria 
            richiesta dall'algoritmo durante la sua esecuzione, anch'essa espressa tramite la notazione Big O."
        />

        <Paragraph 
            title="Notazione e Studio della Complessità degli Algoritmi"
            text="La notazione Big O è il sistema più comune utilizzato per esprimere la complessità di un algoritmo, 
            descrivendo come il tempo di esecuzione o l'uso della memoria crescono al variare della dimensione 
            dell'input. La notazione Big O fornisce una stima asintotica, cioè una previsione del comportamento 
            dell'algoritmo quando l'input diventa molto grande. Questa notazione aiuta a confrontare algoritmi 
            diversi in termini di efficienza, specialmente quando si tratta di grandi quantità di dati. Le notazioni 
            comuni includono O(1), O(n), O(n^2), O(log n) e altre, che indicano rispettivamente una complessità 
            costante, lineare, quadratica e logaritmica."
        />

        <Paragraph 
            title="Obiettivi"
            text="La comprensione della complessità degli algoritmi è essenziale per fare scelte informate su quale 
            algoritmo utilizzare in base alla tipologia di un problema. Algoritmi con una complessità temporale più 
            bassa, come O(n log n), sono generalmente preferibili rispetto a quelli con una complessità più alta, 
            come O(n^2), quando si devono gestire grandi volumi di dati. Tuttavia, nei casi in cui i dati da 
            elaborare sono relativamente piccoli, la complessità temporale diventa meno rilevante e lascia il posto a 
            fattori come la complessità spaziale. In questi scenari, l'efficienza nell'uso della memoria può diventare 
            un criterio più importante nella scelta dell'algoritmo, poiché la gestione delle risorse di memoria 
            può influire notevolmente sulle prestazioni anche con set di dati contenuti."
        />

        <Paragraph 
        title="Tipi di Algoritmi"
        text="Esistono diversi tipi di algoritmi, ognuno adatto a risolvere problemi specifici. Qui esploriamo alcune delle categorie principali:"
        >
        <List 
            listElements={[ 
            { header: "Algoritmi di ricerca", text: "Algoritmi che aiutano a trovare un elemento in una struttura dati." },
            { header: "Algoritmi di ordinamento", text: "Algoritmi che permettono di ordinare una lista di elementi." },
            { header: "Algoritmi di grafi", text: "Algoritmi che operano su grafi, come l'algoritmo di Dijkstra." },
            { header: "Algoritmi di compressione", text: "Algoritmi utilizzati per ridurre la dimensione di un file." }
            ]} 
        />
        </Paragraph>

        <Paragraph 
        title="Algoritmi di Ordinamento"
        text="Gli algoritmi di ordinamento sono fondamentali per la gestione e l'elaborazione dei dati. Alcuni dei più comuni includono:"
        >
        <List 
            listElements={[ 
            { header: "Bubble Sort", text: "Un algoritmo semplice che ordina gli elementi confrontando coppie adiacenti e scambiandoli. Ha una complessità di O(n^2) nel caso peggiore." },
            { header: "Quick Sort", text: "Un algoritmo divide e conquista che suddivide ricorsivamente una lista in parti più piccole. La sua complessità media è O(n log n), ma nel caso peggiore è O(n^2)." },
            { header: "Merge Sort", text: "Un altro algoritmo divide e conquista che suddivide la lista e la unisce in ordine crescente. Ha una complessità di O(n log n) nel caso peggiore." }
            ]} 
        />
        </Paragraph>

        <Paragraph 
        title="Algoritmi di Ricerca"
        text="Gli algoritmi di ricerca sono utilizzati per localizzare un valore in una struttura dati. Tra i più comuni ci sono:"
        >
        <List 
            listElements={[ 
            { header: "Ricerca Lineare", text: "Un algoritmo che esamina ogni elemento di una lista fino a trovare l'elemento cercato. La sua complessità è O(n)." },
            { header: "Ricerca Binaria", text: "Un algoritmo più efficiente che trova un elemento in una lista ordinata, dividendo ripetutamente la lista a metà. La sua complessità è O(log n)." }
            ]} 
        />
        </Paragraph>


      <Buttons goBackButtonDisabled={false} backPath="/blog/concetti-fondamentali/il-sistema-binario/" 
        nextPath="/blog/concetti-fondamentali/linguaggi-di-programmazione/"/>
    </>
  );
}

export default Algoritmi;
