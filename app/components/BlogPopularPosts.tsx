import Eyebrow  from './Eyebrow';
import Headline  from './Headline';
import Body from './Body'
import AltText from './AltText';

function PopularPost(props) {
  const { image } = props
  return (
    <a href="#">
      <div className="group md:mb-8 cursor-pointer flex group">
        <div className=" flex flex-col-reverse md:flex-row items-center justify-between lg:items-start">
        <div className="relative flex h-[85px]  w-full max-w-[110px] justify-end md:h-[210px] md:max-w-[260px] rounded-[8px] overflow-hidden hidden md:block">
            <img
                src={image}
                width="300px"
                height="215px"
                className="h-full object-cover group-hover:scale-105 ease-out duration-300"
            />
        </div>
          <div className="w-full h-full flex flex-col justify-around lg:pt-4 pb-6 md:pl-6">
            <div className="">
              <AltText className="">
                Balanced Diet
              </AltText>
            </div>

            <Headline variant="h5" className="max-lg:text-[16px] py-2 lg:py-0">
                Taming the Fire Within: Everything You Need to Know About Inflammation
            </Headline>

            <AltText className="">
                By Emily Thompson | August 31, 2023
            </AltText>
          </div>
          
        </div>
      </div>
    </a>
  );
}

export default function BlogPopularPosts() {

  return (
    <div className="pt-12 pb-8 lg:py-[80px] px-[20px] 2xl:px-0">
      <div className="px-contained mx-auto flex flex-row items-center justify-between max-w-[var(--content-max-width)] pb-8">
        <div>
            <Eyebrow className="mb-3">✍️ Blogs</Eyebrow>
            <Headline variant="h3" className="text-[#1B1F23] mb-4 font-semibold max-w-[390px]">
                Latest Articles
            </Headline>
        </div>
        <a href="#" className='underline'>View All</a>

      </div>
      <div className="lg:px-contained mx-auto  max-w-[var(--content-max-width)] lg:grid lg:grid-cols-2 lg:gap-8">
        <a
          href="#"
          className="relative flex cursor-pointer group"
        >
        <div className="absolute flex h-[450px] w-full justify-end rounded-[8px] overflow-hidden">
            <img
            src="/app/assets/article-1.png"
            alt=""
            className="h-[450px] object-cover w-full group-hover:scale-105 ease-out duration-300"
            />
        </div>
          <div className="flex h-[450px] items-end">
            <div className="px-contained relative z-10 px-[40px] pb-[40px]">
              <div className="mt-8 flex justify-between">
                <div className="w-full">
                    <AltText className="text-white mb-2">
                        Balanced Diet
                    </AltText>

                    <Headline variant="h4" className="text-white text-[24px] mb-6">
                        Fundamental Supplements: Build A better you
                    </Headline>

                    <AltText className="text-white">
                        By Emily Thompson | August 31, 2023
                    </AltText>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="px-contained lg:px-0 pt-[30px] lg:pt-0">
          {/* {popularPosts?.map(
            ({ image, title, articleTime, cta, category }, index) => {
              return (
                <PopularPost
                  image={image}
                  title={title}
                  category={category}
                  articleTime={articleTime}
                  cta={cta}
                  key={index}
                />
              );
            }
          )} */}
          <PopularPost image="/app/assets/article-2.png" />
          <PopularPost image="/app/assets/article-3.png" />
        </div>
      </div>
    </div>
  );
}