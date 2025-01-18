import './rukavodstva.css';

export default function Rukavodstva() {
    return (
        <>
            <div className='w-full h-full flex flex-col font-rubik px-[120px] py-[0px] gap-[40px] bg-[#3D3E3D]'>
                <div className="w-full flex justify-between">
                    <h1 className="text-[36px] text-[#ABBA27]">О нас</h1>
                    <button
                        className="bg-white bg-opacity-10 rounded-[8px] font-semibold text-[#ABBA27] px-[26px] py-[8px] border border-[#ABBA27] flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${bgbutton})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        Подробнее
                    </button>
                </div>
            </div>
        </>
    );
}
