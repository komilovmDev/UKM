import React from 'react';
import Button from '../../pages/home/components/Button_ukm/Button';
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

const buttonData = [
    { src: ustav, label: 'Устав' },
    { src: Structure, label: 'Структура' },
    { src: Checklist, label: 'Структура' },
    { src: Observation, label: 'Наблюдательный совет' },
    { src: Listing, label: 'Список аффилированных лиц' },
    { src: Checkmsrk, label: 'Существенные факты' },
    { src: taskList, label: 'Протоколы акционеров' },
    { src: Analysis, label: 'Ежеквартальные отчеты' },
    { src: PieChart, label: 'Годовые отчеты' },
    { src: Dividend, label: 'Выплаченные дивиденды' },
    { src: Maths, label: 'Аудиторский отчет' },
];

const DocumentCom = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[50px] gap-8 pb-12'>
            <div className="w-full flex justify-between px-[120px]">
                <h1 className="text-[36px] text-[#3A3C3A]">
                    Нормативные документы
                </h1>
                <Button />
            </div>
            <div className='scroll-hide w-full flex px-[120px] overflow-auto scrollbar-hide gap-4'>
                {buttonData.map((button, index) => (
                    <button key={index} className='h-[164px] px-[48px] py-[32px] bg-[#EEEEEE] rounded-2xl flex flex-col items-center justify-center gap-[24px]'>
                        <img className='w-[52px]' src={button.src} alt={button.label} />
                        <span>{button.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DocumentCom;
