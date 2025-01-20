import './rukavodstva.css';
import osnavatelImg from '../../images/osnavatelFoto.png';
import derektorImg from '../../images/Juratbek-Atajanov.png';
import dilmurodrahimov from '../../images/Rahimov Dilmurod.png';
import igorkuvhkarov from '../../images/Кучкаров-Игор.png';
import lianatoly from '../../images/Ли-Анатолий.png';

export default function Rukavodstva() {
    return (
        <>
            <div className='w-full h-full flex flex-col font-rubik px-[120px] py-[0px] gap-[40px] bg-[#3D3E3D] pt-[80px] pb-[80px]'>
                <div className="w-full flex justify-between">
                    <h1 className="text-[36px] text-[#ABBA27]">Рукаводство</h1>
                </div>
                <div className='bg-[#ffffff10] w-full h-[370px] rounded-[32px] rounded-bl-[160px] flex p-[15px] gap-[40px]'>
                    <img src={osnavatelImg} alt="" />
                    <div className='h-full flex flex-col justify-center gap-[0px]'>
                        <h1 className='text-[32px] text-[#ABBA27] font-medium p-0 m-0'>Атажонов Атавай Атажонович</h1>
                        <label htmlFor="" className='text-[16px] text-[#FFFFFF] font-medium p-0 m-0'>Основатель</label>
                        <p className='text-[#ffffff] mt-[20px] text-[16px]'>Родился в 1949 году в Шаватском районе Хорезмской области. В 1973 году окончил Ташкентский Политехнический Институт, по специальности инженер-механик. В 1989 году вступил на должность директора «Ургенчкорммаш», которую занимал до 2014 года. С 2014 года и до последних дней своей жизни он являлся советником «АО Ургенчкорммаш».</p>
                        <p className='text-[#ffffff] mt-[20px] text-[16px]'>Атавай Атажонович был дальновидным. справедливым и внимательным руководителем. Во многом именно благодаря ему была запущена основная производственная часть завода, которая послужила трамплином для того, чтобы на сегодняшний день «Ургенчкорммаш» стал узнаваемым и конкурентноспособным предприятием на международном рынке.</p>
                    </div>
                </div>
                <div className='flex gap-[48px] justify-center'>
                    <div className='flex flex-col w-[264px] h-[407px] aligin-center'>
                        <img className='rounded-[22px] rounded-bl-[222px] rounded-br-[222px]' src={derektorImg} alt="" />
                        <p className='text-[20px] text-[#ABBA27] font-[600] text-center'>Атажонов Журъатбек Атаваевич</p>
                        <p className='text-[16px] text-[#FFFFFF] font-[600] text-center'>Генеральный директор</p>
                    </div>
                    <div className='flex flex-col w-[264px] h-[407px] aligin-center'>
                        <img className='rounded-[22px] rounded-bl-[222px] rounded-br-[222px]' src={dilmurodrahimov} alt="" />
                        <p className='text-[20px] text-[#ABBA27] font-[600] text-center'>Рахимов Дилмурод Худайназарович</p>
                        <p className='text-[16px] text-[#FFFFFF] font-[600] text-center'>Финансовый директор</p>
                    </div>
                    <div className='flex flex-col w-[264px] h-[407px] aligin-center'>
                        <img className='rounded-[22px] rounded-bl-[222px] rounded-br-[222px]' src={igorkuvhkarov} alt="" />
                        <p className='text-[20px] text-[#ABBA27] font-[600] text-center'>Кучкаров Игорь Эгамбердиевич</p>
                        <p className='text-[16px] text-[#FFFFFF] font-[600] text-center'>Директор по производству</p>
                    </div>
                    <div className='flex flex-col w-[264px] h-[407px] aligin-center'>
                        <img className='rounded-[22px] rounded-bl-[222px] rounded-br-[222px]' src={lianatoly} alt="" />
                        <p className='text-[20px] text-[#ABBA27] font-[600] text-center'>Ли Анатолий<br/> Ирламович</p>
                        <p className='text-[16px] text-[#FFFFFF] font-[600] text-center'>Советник</p>
                    </div>
                </div>
            </div>
        </>
    );
}