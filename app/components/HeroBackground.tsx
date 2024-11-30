import { useState, useEffect } from 'react';
import mockData from '../mockdata/hero.json';
import Headline  from './Headline';
import Body from './Body'
import StarSVG from './Star';

export default function HeroBackground({}) {

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
    <>
      <div
        className="h-[700px] bg-cover bg-left-top lg:h-[944px] lg:bg-center relative"
      >
        <div className="bg-content absolute inset-0 z-[1] h-full w-full bg-orange-300/10">
            <video
                src="https://s3-figma-videos-production-sig.figma.com/video/1120774264148255568/TEAM/ee58/89dd/-f1d3-45a4-a2a8-c462f7e5812d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqNnVXjLe2lqUv3W4xo~j5oOwM~OddOu9~y-~cy5mCO14lzKcvzCmPcP3G-w-YyYGDaR9yFo499rSGRErPNb1uz2kqLBnELfz-vTWDU4bxaHc2Nb~w2D9NgIvQJCqrOsQicrXI9XCL1gp5XS-fyr5kPgb7zEvjmU6H8aP8O13jPSqLOov1hjWrkOmCq-C017l3Ze5FWfmrlvUBWVfRHpdit5Sqt~CbNZPRXKKMaEg8zRudw~N2lqcDZZ~Y8m4rU7hLyvUE7~olgCD7Gd~fS1XD6JtJJKQPZTx~VEkKwnboTAYjqYAZCYGHp2oP9jn~nay5k6Mg~pyLOKD8nklNII1Q__"
                autoPlay
                playsInline
                muted
                loop
                className="h-full w-full object-cover md:block"
            />
        </div>
        <div className="h-full bg-black opacity-40 w-full absolute top-0 z-index-[1]" /> 
        <div className='mx-auto max-w-[var(--content-max-width)] h-full px-[20px] 2xl:px-0'>
            <div className="relative px-contained flex h-full flex-col gap-10 py-12  lg:max-w-[900px] lg:pb-[60px] justify-end z-index-[2]">
                <Headline variant="h1" className="text-white">
                    {data.title}
                </Headline>
                <button
                    className={[
                    'font-medium text-[16px] max-w-[160px] rounded-md px-[20px] py-[13px] text-center  bg-white text-[#1B1F23] cursor-pointer hover:opacity-70 ease-out duration-300',
                    ].join(' ')}
                >
                    {data.ctaText}
                </button>
            </div>
        </div>
      </div>
      {data.stats?.length > 0 && (
        <>
          <section className="relative flex h-[50px] items-center overflow-x-hidden bg-black justify-center">
            <div className="animate-news-ticker-1">
                <div className="flex gap-2 px-2 text-white">
                    {data.stats.map((stat, index) => (
                        <div className="flex items-center gap-x-[16px]" key={index}>
                            <StarSVG />
                            <Body>{stat.title}</Body>
                        </div>
                    ))}
                </div>
            </div>
            <div className="animate-news-ticker-1">
                <div className="flex gap-2 px-2 text-white">
                    {data.stats.map((stat, index) => (
                        <div className="flex items-center gap-x-[16px]" key={index}>
                            <StarSVG />
                            <Body>{stat.title}</Body>
                        </div>
                    ))}
                </div>
            </div>
            <div className="animate-news-ticker-1">
                <div className="flex gap-2 px-2 text-white">
                    {data.stats.map((stat, index) => (
                        <div className="flex items-center gap-x-[16px]" key={index}>
                            <StarSVG />
                            <Body>{stat.title}</Body>
                        </div>
                    ))}
                </div>
            </div>
            <div className="animate-news-ticker-1">
                <div className="flex gap-2 px-2 text-white">
                    {data.stats.map((stat, index) => (
                        <div className="flex items-center gap-x-[16px]" key={index}>
                            <StarSVG />
                            <Body>{stat.title}</Body>
                        </div>
                    ))}
                </div>
            </div>
            <div className="animate-news-ticker-1">
                <div className="flex gap-2 px-2 text-white">
                    {data.stats.map((stat, index) => (
                        <div className="flex items-center gap-x-[16px]" key={index}>
                            <StarSVG />
                            <Body>{stat.title}</Body>
                        </div>
                    ))}
                </div>
            </div>
          </section>
        </>
      )}
     
    </>
  );
}

// HeroBannerWithNewsTicker.displayName = 'HeroBannerWithNewsTicker';
// HeroBannerWithNewsTicker.Schema = Schema;
