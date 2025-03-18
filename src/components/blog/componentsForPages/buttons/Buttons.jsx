import './Buttons.css';

function Buttons({ goBackButtonDisabled, nextPath, backPath}) {
  return (
    <div className="container-link">
      <a href="/blog" className="link-button">Torna indietro</a>
      <div className="gap">
        <a
          href={backPath}
          className={`link-button ${goBackButtonDisabled ? 'disabled-link' : ''}`}
          aria-disabled={goBackButtonDisabled} >
          Indietro
        </a>
        <a href={nextPath} className="link-button">Avanti</a>
      </div>
    </div>
  );
}

export default Buttons;
