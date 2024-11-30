import Body from './Body'

export default function IngredientSlide(props) { 
    const { ingredient } = props;

    return (
        <div className="flex flex-col lg:flex-row mx-auto max-w-[calc(100%-40px)] lg:max-w-[1360px] min-h-[548px] bg-white rounded-lg overflow-hidden border border-[#0000001a] lg:mx-[40px] 2xl:mx-auto">
            <div className="lg:w-5/12 flex items-center justify-center border-r border-[#0000001a] py-8 px-4 lg:py-0 lg:px-0">
                <img src="/app/assets/whey.png" className="lg:h-[356px] lg:w-[356px] object-cover"/>
            </div>
            <div className="lg:w-7/12">
                <div className="bg-[#1B1F23] py-[40px] px-[30px]">
                    <Body className="text-[20px] leading-[28px] text-white pb-[25px]">
                        The Blend
                    </Body>
                    <div className='flex flex-col lg:flex-row justify-around'>
                        <div className='flex flex-row items-center mb-[30px] lg:mb-0'>
                            <img src="/app/assets/plant.png" alt="plant" className='w-[50px]' />
                            <Body className="text-white pl-[25px]">
                                Whey Based
                            </Body>
                        </div>
                        <div className='flex flex-row items-center mb-[30px] lg:mb-0'>
                            <img src="/app/assets/plant.png" alt="plant" className='w-[50px]' />
                            <Body className="text-white pl-[25px]">
                                Whey Based
                            </Body>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src="/app/assets/plant.png" alt="plant" className='w-[50px]' />
                            <Body className="text-white pl-[25px]">
                                Whey Based
                            </Body>
                        </div>
                    </div>
                </div>
                <div className='pt-[30px] pb-[40px] px-[45px]'>
                    <Body className="text-[18px] leading-[21px] text-[#1B1F23] pb-[25px]">
                        The Blend
                    </Body>
                    <div className='flex flex-col lg:flex-row justify-around text-left pb-[30px]'>
                        <div className='flex flex-col mb-[30px] lg:mb-0'>
                            <img src="/app/assets/plant-light.png" alt="plant" className='w-[45px] pb-[15px]'/>
                            <Body className="pb-[10px]">
                                Whey Based
                            </Body>
                            <Body className="font-light text-[14px] opacity-60 max-w-[230px]">
                                Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.
                            </Body>
                        </div>
                        <div className='flex flex-col mb-[30px] lg:mb-0'>
                            <img src="/app/assets/plant-light.png"  alt="plant" className='w-[45px] pb-[15px]'/>
                            <Body className="pb-[10px]">
                                Whey Based
                            </Body>
                            <Body className="font-light text-[14px] opacity-60 max-w-[230px]">
                                Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.
                            </Body>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/app/assets/plant-light.png" alt="plant" className='w-[45px] pb-[15px]'/>
                            <Body className="pb-[10px]">
                                Whey Based
                            </Body>
                            <Body className="font-light text-[14px] opacity-60 max-w-[230px]">
                                Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.
                            </Body>
                        </div>
                    </div>
                    <button
                        className={[
                        'font-medium text-[16px] w-full rounded-md px-[24px] py-[12px] text-center bg--[#1B1F23] text-white cursor-pointer hover:opacity-70 ease-out duration-300',
                        ].join(' ')}
                    >
                        Shop Now
                    </button>
                </div>

            </div>
        </div>
    )
}