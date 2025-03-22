import ScrollUpButton from '../../animations/scrollUpButton/ScrollUpButton';
import '../../styles/global.css'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container primary-gradient-right-left'>
        <a className="footer-link" href='#'>
          Privacy Policy
        </a>
        <p className='footer-text primary-color'>
            @InformaticaOvunque 2025
        </p>
        <ScrollUpButton/>
    </div>
  )
}

export default Footer;