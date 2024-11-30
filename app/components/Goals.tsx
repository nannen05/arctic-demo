import { useState, useEffect } from 'react';
import mockData from '../mockdata/goals.json';
import Headline  from './Headline';
import Body from './Body'
import Eyebrow from './Eyebrow';

export default function Goals({}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await Promise.resolve({ json: () => mockData });
          const pageData = await response.json();
          setData(pageData);
        };
    
        fetchData();
      }, []);

  return (
    <div className="pt-12 pb-8 lg:pb-28 lg:pt-[80px] bg-white my-10 px-[20px] 2xl:px-0 mx-auto">
      <div className="px-contained mx-auto flex flex-col items-center text-center max-w-[var(--content-max-width)] pb-8 lg:px-[40px] 2xl:px-0">
        {data?.eyebrow && (
            <Eyebrow className="uppercase mb-3">{data.eyebrow}</Eyebrow>
        )}
        {data?.title && (
         <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold">
            {data.title}
         </Headline>
        )}
        {data?.copy && (
            <Body className="text-[#1B1F23B2] opacity-70 max-w-[300px] mx-auto">{data.copy}</Body>
        )}
      </div>
      {data?.goals?.length > 0 && (
        <div className="flex flex-col items-center lg:items-start lg:px-contained mx-auto  max-w-[1520px] lg:grid lg:grid-cols-5 lg:gap-6">
            {data.goals.map((goal, index) => (
                <div className='flex flex-col max-w-[288px] cursor-pointer group mb-[30px] lg-[0px]' key={index}>
                    <div className='overflow-hidden rounded-md mb-[25px]'>
                        <img
                            src={goal.image}
                            className="h-[392px] object-cover  w-full group-hover:scale-105 ease-out duration-300"
                            alt=""
                        />
                    </div>
                    <div className='flex justify-between'>
                        <div className="mr-2 w-[calc(100%-37px)]">
                            <Headline variant="h5" className="mb-[10px] text-[#1B1F23]">
                                {goal.title}
                            </Headline>
                            <Body className="text-[#1B1F23] opacity-80 text-[16px]">{goal.copy}</Body>
                        </div>
                        <div className='text-white rounded-full bg-white border border-[#1B1F23] w-[37px] h-[37px] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9351 10.4129L13.445 10.4078L13.4199 3.07987L1.91861 14.5095L0.851299 13.4489L12.3512 2.02062L4.97877 1.9943L4.97358 0.513437L13.4114 0.542766L13.4104 0.535378L14.9005 0.540536L14.9351 10.4129Z" fill="#1B1F23"/>
                        </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}