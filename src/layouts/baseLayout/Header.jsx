import './Header.css'
import '../../styles/global.css'

function Header() {
    return(
        <div className="div-container primary-gradient-right-left">
            <nav className="flex-central">
                <ul className='ul'>
                    <li className='ul-li'>
                        <a href='/home' className='primary-color ul-li-a'>Home</a>
                    </li>
                    <li>
                        <a href='/contact' className='primary-color ul-li-a'>Contattami</a>
                    </li>
                    <li>
                        <a href='/blog' className='primary-color ul-li-a'>Blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
