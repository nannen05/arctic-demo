import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mockData from '../mockdata/reviewslider.json';
import ArrowButton from './ArrowButton';
import Eyebrow from './Eyebrow';
import Headline  from './Headline';
import Body from './Body'

const reviews = [0,0,0,0,0]

export default function ReviewSlider({ }) {

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
      <div className="mx-auto max-w-[var(--content-max-width)] text-center px-[20px] 2xl:px-0">
        <div className="grid gap-3 lg:mb-12 relative text-center">
            {data?.eyebrow && (
                <Eyebrow className="mb-3">{data.eyebrow}</Eyebrow>
            )}
            {data?.title && (
            <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold">
                {data.title}
            </Headline>
            )}
            {data?.ctaText && (
                <a href={data.ctaUrl} className='underline decoration-solid mb-[30px] lg:mb-0'>{data.ctaText}</a>
            )}  
            <div className="flex justify-center">
                <div className="absolute left-[calc(25%)] top-0 z-10 hidden h-[80%] items-center lg:flex">
                    <ArrowButton arrowDirection="left" ref={navigationPrevRef} />
                </div>
                <div className="absolute right-[calc(25%)] top-0 z-10 hidden h-[80%] items-center lg:flex">
                    <ArrowButton arrowDirection="right" ref={navigationNextRef} />
                </div>
            </div>
        </div>

        {renderClientSideComponent && data?.reviews?.length > 0 && (
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
            spaceBetween={"20px"}
            breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 3,
                  },
                1280: {
                  slidesPerView: 5,
                },
            }}
          >
            {data.reviews.map((review, index) => (
              <SwiperSlide key={index} className="pt-12 2xl:max-w-[300px]">
                {({ isActive }) => (
                  <div style={{
                    transform: isActive ? 'translateY(-50px)' : 'translateY(0px)',
                  }}>
                    <div className="mb-[16px] flex justify-center">
                      <div
                        className="relative aspect-square transition-all"
                        
                      >
                        <video
                            src={review.video}
                            autoPlay
                            playsInline
                            muted
                            loop
                            className="h-[420px] object-cover w-[300px] rounded-lg"
                            style={{
                                height: isActive ? '500px' : '420px',
                            }}
                        />
                      </div>
                    </div>
                    <div className="px-contained bg-white rounded-lg  mx-auto p-2 max-w-[300px]" style={{
                          transform: isActive ? 'scale(1)' : 'scale(1)',
                        }}>
                        <div className='flex justify-between items-center'>
                            <img src="/app/assets/omega-3.png" className="h-[70px] w-[70px] object-cover rounded-lg" />
                            <div className='ml-[5px] flex flex-col text-left justify-center'>
                                <Body className="text-[13px] leading-[15px] text-[#1B1F23] font-normal mb-2">
                                    Magnesium L-Threonate
                                </Body>
                                <Body className="text-[12px] leading-[14px] text-[#1B1F23]">
                                    $49.95
                                </Body>
                            </div>
                            <div class="flex items-center justify-center w-[32px] h-[32px] bg-[#1B1F23] rounded-full cursor-pointer hover:opacity-70 ease-out duration-300">
                                <span class="text-white text-2xl leading-2xl font-extralight relative top-[-2px]">+</span>
                            </div>
                        </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
