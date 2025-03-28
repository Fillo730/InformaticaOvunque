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

export default slideData;