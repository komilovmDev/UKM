import React from 'react'
import UstavHeader from '../Ustav/components/UstavHeader' 
import Table from './components/Table/Table'

const Affilirovanie = () => {
    return (
        <div className='px-[120px] py-[60px] bg-[#3D3E3D] flex flex-col gap-[32px] '>
            <div>
                <UstavHeader title={"Список аффилированныхлиц"} />
            </div>
            <div>
                <Table />
            </div>
        </div>
    )
}

export default Affilirovanie