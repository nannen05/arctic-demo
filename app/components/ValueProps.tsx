import { useState, useEffect } from 'react';
import mockData from '../mockdata/valueprops.json';
import Eyebrow from './Eyebrow';
import Headline  from './Headline';
import Body from './Body'

export default function ValueProps({}) {

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
    <div className="py-[80px] bg-white mx-auto max-w-[var(--content-max-width)] px-[20px] 2xl:px-0">
      <div className="px-contained mx-auto flex flex-col items-center lg:items-start max-w-[var(--content-max-width)] mb-[50px]">
        {data?.eyebrow && (
            <Eyebrow className="mb-3">{data.eyebrow}</Eyebrow>
        )}
        {data?.title && (
         <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold lg:max-w-[390px] text-center lg:text-left">
            {data.title}
         </Headline>
        )}
      </div>
      {data?.props?.length > 0 && (
        <div className="lg:px-contained mx-auto  max-w-[var(--content-max-width)] flex flex-col lg:flex-row items-center justify-between lg:items-start">
             {data.props.map((prop, index) => (
                <div key={index} className="max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start mb-[30px] lg:mb-0">
                    <img src={prop.image} alt={prop.imageAlt} className='mb-6 w-[50px]'/>
                    <Headline variant="h5" className="text-[18px] mb-4 text-[#1B1F23]">
                        {prop.title}
                    </Headline>
                    <Body className="text-[#1B1F23] opacity-80 text-[16px] leading-[24px]">{prop.copy}</Body>
                </div>
             ))}
        </div>
      )}
    </div>
  );
}