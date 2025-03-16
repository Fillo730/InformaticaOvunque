import './Contact.css'

function Contact () {
  return (
    <div>
        <div className='div-title'>
          <h1>Chi sono io? Perchè scrivo cose sui computer?</h1>
        </div>
        <div className='div-text'>
          <p className='p-text'>
            Ciao, mi chiamo Filippo, sono uno studente di ingegneria informatica; da quando sono piccolo sono sempre stato appassionato
            di computer ed elettronica in generale. Per questo motivo, ho deciso di fare questo piccolo blog; per divertermi e magari, far
            imparare qualcosa di nuovo alle persone sfortunate che dovessero leggerlo. 
          </p>

          <h3 className='h3-title'>Perchè proprio l'informatica?</h3>
          <p className='p-text'>
            Diciamo che sono di parte (sono un ingegnere informatico), ma comunque l'informatica ha qualcosa di particolare rispetto a tanti altri
            campi. La usiamo tutti quanti, ne siamo completamente circondati ovunque giriamo lo sguardo, ma comunque la maggior parte di noi non
            ha nemmeno la più pallida idea di cosa c'è "sotto il cofano". Ecco, magari girando un pò in questo blog te ne farai un idea e, chissà, 
            magari ti innamorerai di questa meraviglia.
          </p>

          <h3 className='h3-title'>Chiedimi Qualcosa</h3>
          <p className='p-text'>
            In caso vuoi contattarmi per qualsiasi motivo, anche due chiacchere, scrivimi pure alla seguente email:<br/>
            <strong>Email: </strong> mondoinformatico@gmail.com
          </p>
        </div>
    </div>
  )
}

export default Contact;