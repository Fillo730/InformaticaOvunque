import { useState } from "react";
import "./BinaryDecimalConverter.css";

export default function BinaryDecimalConverter() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState("");

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value)) {
      setBinary(value);
      setDecimal(value ? parseInt(value, 2).toString() : "");
      setError("");
    } else {
      setError("Inserisci solo 0 e 1 per il binario.");
    }
  };

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setDecimal(value);
      setBinary(value ? Number(value).toString(2) : "");
      setError("");
    } else {
      setError("Inserisci solo numeri validi per il decimale.");
    }
  };

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
      <input
        type="text"
        value={decimal}
        onChange={handleDecimalChange}
        placeholder="Inserisci numero decimale"
        className="converter-input"
      />
      {error && <p className="converter-error">{error}</p>}
    </div>
  );
}