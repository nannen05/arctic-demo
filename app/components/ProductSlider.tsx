import { useEffect, useRef, useState, Suspense } from 'react';
import {Await} from '@remix-run/react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mockData from '../mockdata/productslider.json';
import ProductCard from './ProductCard';
import ArrowButton from './ArrowButton';
import Eyebrow from './Eyebrow';
import Headline  from './Headline';
import Body from './Body'

const reviews = [0,0,0,0,0]


export default function ProductSlider({
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
    <section className="bg-[#F6F6F5] py-[80px]">
      <div className="mx-auto max-w-[var(--content-max-width)] text-center lg:px-[20px] 2xl:px-0">
        <div className="grid gap-3 lg:mb-4 relative">
            {data?.eyebrow && (
                <Eyebrow className="mb-3">{data.eyebrow}</Eyebrow>
            )}
            {data?.title && (
            <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold">
                {data.title}
            </Headline>
            )}
            {data?.ctaText && (
                <a href={data.ctaUrl} className='underline decoration-solid'>{data.ctaText}</a>
            )}  

            <div className="flex justify-center">
                <div className="absolute left-[calc(32%)] top-0 z-10 hidden h-[80%] items-center lg:flex">
                    <ArrowButton arrowDirection="left" ref={navigationPrevRef} />
                    </div>
                    <div className="absolute right-[calc(32%)] top-0 z-10 hidden h-[80%] items-center lg:flex">
                    <ArrowButton arrowDirection="right" ref={navigationNextRef} />
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
                                        <ProductCard product={product} />
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
