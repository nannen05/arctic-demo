import { useState, useEffect } from 'react';
import mockData from '../mockdata/instagram.json';

export default function Instagram() {

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
        <section className="pb-[80px] px-[20px] 2xl:px-0">
            <div className="mx-auto  max-w-[var(--content-max-width)] grid grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="h-[265px] rounded-lg bg-[#F6F6F5] col-span-2">
                    <div className="h-[265px] flex flex-col items-center justify-center">
                        <div className='flex flex-row items-center justify-center mb-4'>
                            <img src="/app/assets/logo.png"/>
                            <p className='font-semibold text-[20px] ml-[10px]'><span className='font-normal'>@</span>uncmfrt.com</p>
                        </div>
                        <button
                            className={[
                            'font-medium text-[14px] leading-[16px] w-max-[240px] rounded-md px-[24px] py-[12px] text-center disabled:opacity-50 lg:px-[2.125rem] lg:py-[0.906rem] lg:pb-[1.175rem] bg-transparent text-[#1B1F23] border border-[#1B1F23] cursor-pointer',
                            ].join(' ')}
                        >
                            Follow Us on Instagram
                        </button>
                    </div>
                </div>

                {data?.posts?.length > 0 && (
                    <>
                        {data.posts.map((post, index) => (
                            <a href="#" className='h-[265px] rounded-lg cursor-pointer' key={index}>
                                <img src={post.image} alt="" className="h-[265px] object-cover rounded-lg w-full" />
                            </a>
                        ))}
                    </>
                )}
            </div>
        </section>
    )   
}