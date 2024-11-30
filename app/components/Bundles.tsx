import { useEffect, useRef, useState, Suspense } from 'react';
import {Await} from '@remix-run/react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mockData from '../mockdata/bundles.json';
import ProductCard from './ProductCard';
import ArrowButton from './ArrowButton';
import Eyebrow from './Eyebrow';
import Headline  from './Headline';

const reviews = [0,0,0,0,0]

export default function Bundles({
    products,
  }: {
    products: Promise<Array | null>;
  }) {

    const [data, setData] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
    const [renderClientSideComponent, setRenderClientSideComponent] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
          const response = await Promise.resolve({ json: () => mockData });
          const pageData = await response.json();
          setData(pageData);
      };
    
      fetchData();
  
      setRenderClientSideComponent(true);
    }, []);

  return (
    <section className="py-[80px]">
      <div className="mx-auto max-w-[var(--content-max-width)] px-[20px] 2xl:px-0">
        <div className="flex flex-col lg:flex-row relative items-center justify-between">
            <div>
                {data?.eyebrow && (
                    <Eyebrow className="mb-3">{data.eyebrow}</Eyebrow>
                )}
                {data?.title && (
                <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold">
                    {data.title}
                </Headline>
                )}
            </div>

            <ul className='flex flex-col items-center lg:flex-row mb-[20px] lg:mb-0'>
                <li className='text-[14px] pb-2 lg:mr-7 cursor-pointer group inline-block'>
                    <span className='border-b group-hover:border-b group-hover:border-[#1B1F23] lg:pb-4 ease-out duration-100'>
                        Sleep
                    </span>
                </li>
                <li className='text-[14px] pb-2 lg:mr-7 cursor-pointer group inline-block'>
                    <span className='group-hover:border-b group-hover:border-[#1B1F23] lg:pb-4 ease-out duration-100'>
                        Cognitive Function
                    </span>
                </li>
                <li className='text-[14px] pb-2 lg:mr-7 cursor-pointer group inline-block'>
                    <span className='group-hover:border-b group-hover:border-[#1B1F23] lg:pb-4 ease-out duration-100'>
                        Foundational Health
                    </span>
                </li>
                <li className='text-[14px] pb-2 lg:mr-7 cursor-pointer group inline-block'>
                    <span className='group-hover:border-b group-hover:border-[#1B1F23] lg:pb-4 ease-out duration-100'>
                        Athletic Performance
                    </span>
                </li>
                <li className='text-[14px] pb-2 cursor-pointer group inline-block'>
                    <span className='group-hover:border-b group-hover:border-[#1B1F23] lg:pb-4 ease-out duration-100'>
                        Hormone Support
                    </span>
                </li>
            </ul>

            <div className='flex flex-col lg:flex-row items-center'>
                {data?.ctaText && (
                    <a href={data.ctaUrl} className='underline decoration-solid'>{data.ctaText}</a>
                )}  

                <div className="flex justify-center lg:pl-[20px] mt-[20px] lg:mt-0">
                    <div className="top-0 z-10  h-[80%] items-center lg:flex mr-[6px]">
                        <ArrowButton arrowDirection="left" ref={navigationPrevRef} />
                        </div>
                        <div className="top-0 z-10 h-[80%] items-center lg:flex">
                        <ArrowButton arrowDirection="right" ref={navigationNextRef} />
                        </div>
                </div>
            </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={products} errorElement={<div>Oops!</div>}>
                {(response) => (
                        renderClientSideComponent && (
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                                }}
                                onBeforeInit={(_swiper) => {
                                _swiper.params.navigation.prevEl = navigationPrevRef.current;
                                _swiper.params.navigation.nextEl = navigationNextRef.current;
                                }}
                                slidesPerView={1}
                                loop
                                spaceBetween={"20px"}
                                breakpoints={{
                                    768: {
                                      slidesPerView: 1,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                      },
                                }}
                            >
                            {response
                                ? response?.nodes.map((product, index) => (
                                    <SwiperSlide key={index} className="pt-12">
                                         <ProductCard product={product} background="bg-[#F6F6F5]" tagBackground='bg-white' bundle={true} />
                                    </SwiperSlide>
                                    ))
                                : null}
                            </Swiper>
                        )
                )}
            </Await>
        </Suspense>
      </div>
    </section>
  );
}
