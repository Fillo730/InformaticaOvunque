import './Header.css'
import '../../styles/global.css'

function Header() {
    return(
        <div className="div-container primary-gradient-right-left">
            <nav className="flex-central">
                <ul className='ul'>
                    <li className='ul-li text-pop-up-top'>
                        <a href='/home' className='primary-color ul-li-a header-text-size'>Home</a>
                    </li>
                    <li className='ul-li text-pop-up-top'>
                        <a href='/contact' className='primary-color ul-li-a header-text-size'>Contattami</a>
                    </li>
                    <li className='ul-li text-pop-up-top'>
                        <a href='/blog' className='primary-color ul-li-a header-text-size'>Blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;