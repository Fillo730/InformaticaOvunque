import Picture from "../../componentsForPages/image/Picture";
import Paragraph from "../../componentsForPages/paragraph/Paragraph";
import Buttons from "../../componentsForPages/buttons/Buttons";

function SistemaBinario() {

  return (
    <>
      <h1 className="text-central primary-color">4: Il Sistema Binario</h1>

      <Paragraph 
        title="Introduzione" 
        text="Il sistema binario è alla base della rappresentazione dei dati nei computer e nei dispositivi digitali. È un sistema numerico posizionale che utilizza solo due simboli: 0 e 1, noti anche come bit (binary digits). 
              A differenza del sistema decimale, che usa dieci simboli (0-9), il sistema binario si fonda su potenze di due. Questo permette ai computer di operare con segnali elettrici, che possono essere facilmente rappresentati come due stati: acceso (1) e spento (0)."
      />

      <Picture 
        path="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Binary_number_system.svg/500px-Binary_number_system.svg.png"
        altText="Rappresentazione del sistema binario"
      />

      <Paragraph 
        title="Come Funziona il Sistema Binario?" 
        text="Nel sistema binario, ogni cifra (bit) ha un valore che è una potenza di 2. La cifra più a destra ha un valore di 2^0, la successiva a sinistra ha un valore di 2^1, poi 2^2, e così via. 
              Ad esempio, consideriamo il numero binario 1011. Per capire a cosa corrisponde in decimale, dobbiamo moltiplicare ogni bit per la potenza di 2 corrispondente alla sua posizione, e poi sommare i risultati."
      />

      <Paragraph 
        title="Esempio di Conversione da Binario a Decimale" 
        text="Consideriamo il numero binario 1011:
              - La cifra più a destra (1) è posizionata in 2^0, quindi 1 * 2^0 = 1
              - La seconda cifra da destra (1) è posizionata in 2^1, quindi 1 * 2^1 = 2
              - La terza cifra da destra (0) è posizionata in 2^2, quindi 0 * 2^2 = 0
              - La quarta cifra da destra (1) è posizionata in 2^3, quindi 1 * 2^3 = 8

              Sommiamo i risultati: 8 + 0 + 2 + 1 = 11. Quindi, il numero binario 1011 corrisponde al numero decimale 11."
      />

      <Paragraph 
        title="Conversione Binario-Decimal: Principio Generale" 
        text="In generale, per convertire un numero binario in decimale, bisogna sommare i prodotti di ogni bit per la potenza di 2 corrispondente alla sua posizione. Se il bit è 1, la potenza di 2 viene inclusa nel calcolo; se è 0, non contribuisce al risultato."
      />

      <Buttons goBackButtonDisabled={false} nextPath="/blog/concetti-fondamentali/introduzione-agli-algoritmi/" />
    </>
  );
}

export default SistemaBinario;
