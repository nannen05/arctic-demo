import Headline  from './Headline';
import Body from './Body'

export default function HeroBackground({}) {

  return (
    <section className='pt-[80px] mx-auto max-w-[var(--content-max-width)] px-[20px] 2xl:px-0'>
      <div
        className="h-[432px] bg-cover bg-left-top lg:h-[750px] lg:bg-center relative rounded-[8px] overflow-hidden"
        style={{
             backgroundImage: `url(/app/assets/tub.png)`,
        }}
      >
        <div className="h-full bg-black opacity-40 w-full absolute top-0" /> 
        <div className="relative px-contained flex h-full flex-col py-12 px-[40px] lg:px-[80px] lg:max-w-[940px] justify-center">
          <Headline variant="h2" className="text-white mb-[15px]">
            The Next Generation is Here
          </Headline>
          <Body className="text-white mb-[40px]">Expert Driven</Body>
          <div className="cta-group flex gap-3">
            <button
                className={[
                'max-w-[200px] rounded-[8px] px-[35px] py-[15px] text-center text-xs font-light disabled:opacity-50  lg:text-base lg:font-normal bg-white text-[#1B1F23] cursor-pointer hover:opacity-70 ease-out duration-300',
                ].join(' ')}
            >
                Take The Plunge
            </button>
            <button
                className={[
                'max-w-[200px] rounded-[8px] px-[35px] py-[15px] text-center text-xs font-light disabled:opacity-50 lg:text-base lg:font-normal border border-white bg-transparent text-white cursor-pointer hover:bg-[#1B1F23] hover:border-[#1B1F23] hover:opacity-70 ease-out duration-300',
                ].join(' ')}
            >
                Dive Deeper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
