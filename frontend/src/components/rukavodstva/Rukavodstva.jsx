import './rukavodstva.css';
import osnavatelImg from '../../images/osnavatelFoto.png';

export default function Rukavodstva() {
    return (
        <>
            <div className='w-full h-full flex flex-col font-rubik px-[120px] py-[0px] gap-[40px] bg-[#3D3E3D]'>
                <div className="w-full flex justify-between">
                    <h1 className="text-[36px] text-[#ABBA27]">Рукаводство</h1>
                </div>
                <div className='bg-[#ffffff10] w-full h-[370px] rounded-[32px] rounded-bl-[160px] flex p-[15px] gap-[40px]'>
                    <img src={osnavatelImg} alt="" />
                    <div className='h-full flex flex-col justify-center gap-[0px]'>
                        <h1 className='text-[32px] text-[#ABBA27] font-medium p-0 m-0'>Атажонов Атавай Атажонович</h1>
                        <label htmlFor="" className='text-[16px] text-[#FFFFFF] font-medium p-0 m-0'>Основатель</label>
                        <p className='text-[#ffffff] mt-[20px]'>Родился в 1949 году в Шаватском районе Хорезмской области. В 1973 году окончил Ташкентский Политехнический Институт, по специальности инженер-механик. В 1989 году вступил на должность директора «Ургенчкорммаш», которую занимал до 2014 года. С 2014 года и до последних дней своей жизни он являлся советником «АО Ургенчкорммаш».</p>
                        <p className='text-[#ffffff] mt-[20px]'>Атавай Атажонович был дальновидным. справедливым и внимательным руководителем. Во многом именно благодаря ему была запущена основная производственная часть завода, которая послужила трамплином для того, чтобы на сегодняшний день «Ургенчкорммаш» стал узнаваемым и конкурентноспособным предприятием на международном рынке.</p>
                    </div>
                </div>
            </div>
        </>
    );
}