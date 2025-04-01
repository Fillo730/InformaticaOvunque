import { useState } from "react";
import "./BinaryDecimalConverter.css";

export default function BinaryDecimalConverter() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState("");

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);
  };

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);
    
  };

  const handleBinaryToDecimal = () => {
    if (/^[01]+$/.test(binary)) {
      setDecimal(binary ? parseInt(binary, 2).toString() : "");
      setError("");
    } else {
      setError("Inserisci solo le cifre 0 o 1 per i numeri binari.");
    }
  };

  const handleDecimalToBinary = () => {
    if (/^\d*$/.test(decimal)) {
      setBinary(decimal ? Number(decimal).toString(2) : "");
      setError("");
    } else {
      setError("Inserisci solo cifre 0-9 per i numeri decimali.");
    }
  };

  const handleClear = () => {
    setBinary("");
    setDecimal("");
  }

  return (
    <div className="converter-container">
      <h2 className="primary-color text-central">Convertitore Binario-Decimale</h2>
      <input
        type="text"
        value={binary}
        onChange={handleBinaryChange}
        placeholder="Inserisci numero binario"
        className="converter-input"
      />
      <button onClick={handleBinaryToDecimal} className="convert-button">
        Converti in Decimale
      </button>
      <input
        type="text"
        value={decimal}
        onChange={handleDecimalChange}
        placeholder="Inserisci numero decimale"
        className="converter-input"
      />
      <button onClick={handleDecimalToBinary} className="convert-button">
        Converti in Binario
      </button>
      <div className="converter-clearContainer">
        <button onClick={handleClear} className="convert-button clear">
          Pulisci
        </button>
      </div>
      {error && <p className="converter-error">{error}</p>}
    </div>
  );
}
