import './nav.css'
import logo from '../../images/navLogo.svg'
import flagrus from '../../images/flagrus.png'

export default function Navbar() {
    return (
        <nav>
            <div className="nav_left">
                <img src={logo} alt="" />
            </div>
            <div className="nav_right">
                <ul className="category_nav">
                    <li>О нас</li>
                    <li>Наши продукции</li>
                    <li>Производство</li>
                    <li>Контакты</li>
                    <li>Новости</li>
                </ul>
                <div className="nav_rigth_btns">
                    <button className='nav_rigth_btns_lang'>
                        <img src={flagrus} alt="" />
                        <p>Русский</p>
                    </button>
                    <button className='nav_rigth_btns_zakaz'>
                        Заказать
                    </button>
                </div>
            </div>
        </nav>
    )
}