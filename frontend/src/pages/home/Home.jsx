import './home.css'
import headerInfoImg from '../../images/homeImg/headerInfoImg.png'
import headerBg from '../../images/homeImg/logoHomeBgSvg.svg'
import logoMini from '../../images/homeImg/logoMini.png'

export default function Home() {
    return (
        <>
            <header>
                <div className="header_info">
                    <div className="header_info_titls">
                        <h2>Надежная агротехника для развития вашего бизнеса</h2>
                        <p>Современные решения для аграрного бизнеса, которые помогают вам идти в ногу с инновациями и получать максимальную эффективность.</p>
                    </div>
                    <div className="header_info_imgBox">
                        <div className="header_info_imgBox_infos">
                            <b>Плуг оборотный навесной ПОН 4+1x40</b>
                            <p>Предназначено для пахоты под зерновые и технические культуры на глубину 30…45 cm. </p>
                        </div>
                        <img src={headerInfoImg} alt="" />
                    </div>
                </div>
            </header>
            <div className="senosti">
                <div className="senosti_con">
                    <p className="senosti_title">Ценности компании</p>
                    <div className="senosti_boxs">
                        <div className="senosti_con_logo">
                            <img src={logoMini} alt="" />
                        </div>
                        <div className="senosti_box">
                            <h5>Готовность к переменам</h5>
                            <p>Совершенствовать производство, внедрять самые современные технологии, повышать профессиональный уровень сотрудников.</p>
                        </div>
                        <div className="senosti_box">
                            <h5>Вовлеченность</h5>
                            <p>UKM стремится к тому, чтобы все сотрудники испытывали гордость и удовлетворение от достигаемых нами результатов.</p>
                        </div>
                        <div className="senosti_box">
                            <h5>Клиентоориентированность</h5>
                            <p>Умение слушать и понимать запросы наших клиентов является ключевым фактором в разработке инновационных решений.</p>
                        </div>
                        <div className="senosti_box">
                            <h5>Преданность, открытость и честность</h5>
                            <p>Мы привержены своим ценностям и преданы нашим клиентам. Мы работаем честно и открыто как друг с другом, так и с нашими клиентами и партнерами.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 