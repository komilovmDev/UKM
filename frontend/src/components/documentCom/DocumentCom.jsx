import React from 'react';
import Button from '../../pages/home/components/Button_ukm/Button';
import ustavIcon from './icons/ustav.svg'

const DocumentCom = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="w-[1200px] flex justify-between m-[0 auto]">
                <h1 className="text-[36px] text-[#3A3C3A]">
                    Нормативные документы
                </h1>
                <Button />
            </div>
            <div>
                {/* <img src={} alt="" /> */}
            </div>
        </div>
    );
};

export default DocumentCom;