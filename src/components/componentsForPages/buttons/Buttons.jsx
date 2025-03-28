import './Buttons.css'

function Buttons({ goBackButtonDisabled = false, goNextButtonDisabled = false, nextPath = "", backPath = "" }) {
  return (
    <div className="container-link">
        <a href="/blog" className="link-button">Torna indietro</a>
        <div class="gap">
            <a
            href={backPath}
            className={`link-button ${goBackButtonDisabled ? 'disabled-link' : ''}`}
            aria-disabled={goBackButtonDisabled}
            >
            Indietro
            </a>
            <a
            href={nextPath}
            className={`link-button ${goNextButtonDisabled ? 'disabled-link' : ''}`}
            aria-disabled={goNextButtonDisabled}
            >
            Avanti
            </a>
        </div>
    </div>
  )
}

export default Buttons;