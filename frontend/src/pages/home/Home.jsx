import './home.css'
import headerInfoImg from '../../images/homeImg/headerInfoImg.png'
import headerBg from '../../images/homeImg/logoHomeBgSvg.svg'

export default function Home() {
    return (
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
    )
} 