import ScrollUpButton from '../../animations/scrollUpButton/ScrollUpButton';
import '../../styles/global.css'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container primary-gradient-right-left'>
        <a className="footer-link footer-text header-margin-top" href='/privacy-policy'>
          Privacy Policy
        </a>
        <div className='footer-text primary-color header-margin-top'>
            @InformaticaOvunque 2025
        </div>
        <ScrollUpButton/>
    </div>
  )
}

export default Footer;