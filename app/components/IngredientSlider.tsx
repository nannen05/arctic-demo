import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mockData from '../mockdata/ingredients.json';
import IngredientSlide from './IngredientSlide';
import ArrowButton from './ArrowButton';
import Eyebrow from './Eyebrow';
import Headline  from './Headline';
import Body from './Body'

const reviews = [0,0,0,0]

export default function IngredientSlider({ }) {

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
    <section className="bg-[#F6F6F5] py-[80px] relative">
      <div className="mx-auto max-w-[var(--content-max-width)] text-center">
        <div className="grid gap-3 lg:mb-4 relative">
        {data?.eyebrow && (
            <Eyebrow className="uppercase mb-3">{data.eyebrow}</Eyebrow>
        )}
        {data?.title && (
         <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold">
            {data.title}
         </Headline>
        )}

        </div>

        {renderClientSideComponent && (
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
            centeredSlides
            loop
            spaceBetween={1}
            clasName="lg:px-[40px] 2xl:px-0"
          >
            {[...reviews].map((review, index) => (
              <SwiperSlide key={index} className="pt-12">
                    <IngredientSlide />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="flex justify-center relative">
            <div className="absolute left-0 bottom-0 h-[540px] z-10 hidden items-center lg:flex">
                <ArrowButton arrowDirection="left" ref={navigationPrevRef} />
            </div>
            <div className="absolute right-0 bottom-0 h-[540px] z-10 hidden items-center lg:flex">
                <ArrowButton arrowDirection="right" ref={navigationNextRef} />
            </div>
        </div>
      </div>
    </section>
  );
}
