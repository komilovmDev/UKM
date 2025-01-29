import React from 'react';
import ustav from "./icons/ustav.png";
import taskList from './icons/Task list.png';
import Structure from './icons/Structure.png';
import PieChart from './icons/Pie chart.png';
import Observation from './icons/Observation.png';
import Maths from './icons/Maths.png';
import Listing from './icons/Listing.png';
import Dividend from './icons/Dividend.png';
import Checkmsrk from './icons/Check mark.png';
import Checklist from './icons/Check list.png';
import Analysis from './icons/Analysis.png';
import { Link } from 'react-router-dom';

const DocPage = () => {

    const buttonData = [
        { url: '/ustav' , src: ustav, label: 'Устав' },
        { url: '/Struktura' , src: Structure, label: 'Структура' },
        { url: '/BiznesPlan', src: Checklist, label: 'Структура' },
        { url: '/Nablyudat', src: Observation, label: 'Наблюдательный совет' },
        { url: '/Affilirovanie' , src: Listing, label: 'Список аффилированных лиц' },
        { url: '/fakt' , src: Checkmsrk, label: 'Существенные факты' },
        { url: '/Aksiya' , src: taskList, label: 'Протоколы акционеров' },
        { url: '/KvartalIzohi', src: Analysis, label: 'Ежеквартальные отчеты' },
        { url: '/YilIzohi', src: PieChart, label: 'Годовые отчеты' },
        { url: '/Divident' , src: Dividend, label: 'Выплаченные дивиденды' },
        { url: '/Audit', src: Maths, label: 'Аудиторский отчет' },
    ];

    return (
        <div className='w-full h-full bg-[#3D3E3D] py-[80px]'>
            <div className="w-[1200px] flex flex-col gap-[36px]" style={{ margin: "0 auto" }}>
                <h1 className='text-[36px] text-[#ffffff]'>Нормативные документы</h1>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    {buttonData.map((button, index) => (
                        <Link to={button.   url}>
                            <button key={index} className='w-[388px] h-[164px] px-[48px] py-[32px] bg-[#EEEEEE] rounded-2xl flex flex-col items-center justify-center gap-[24px]'>
                                <img className='w-[52px]' src={button.src} alt={button.label} />
                                <span>{button.label}</span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DocPage;