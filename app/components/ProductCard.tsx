import { useEffect, useRef, useState, Suspense } from 'react';
import Headline  from './Headline';
import Body from './Body'
import StarBlackSVG from './StarBlack';

interface ProductCardProps {
    product: Object;
    background: string;
    tagBackground: string,
    bundle: boolean
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    
    const{ product, background, tagBackground, bundle } = props;

    // console.log(product, props)
    const [productLabels, setProductLabels] = useState([])
    const [bannerLabel, setBannerLabel] = useState('')
    const [isSubscription, setIsSubscription] = useState(false)

    const buildLabels = () => {
        if(product?.tags?.length == 0) return;

        let labelValuesAfterPrefix = product?.tags
            .filter(item => item.startsWith('label::'))
            .map(item => item.replace('label::', ''));

        return labelValuesAfterPrefix
    }

    const buildBannerLabel = () => {
        if(product?.tags?.length == 0) return;

        let labelValuesAfterPrefix = product?.tags
            .filter(item => item.startsWith('banner::'))
            .map(item => item.replace('banner::', ''));

        return labelValuesAfterPrefix
    }

    const checkProductForSubscription = () => {
        if(product?.tags?.length == 0) return;

        return product?.tags.includes('subscription')
    }

    useEffect(() => {
        setProductLabels(buildLabels())
        setBannerLabel(buildBannerLabel())
        setIsSubscription(checkProductForSubscription())
    }, []);

    return (
        <div className={`flex flex-col mx-auto ${background} rounded-[8px] max-w-[365px] h-[505px] pb-6 pt-[50px] px-[20px] relative cursor-pointer group`}>
            {bannerLabel?.length > 0 && (
                <div className="pointer-events-none absolute left-3 top-3 z-[1] px-3 py-1.5 bg-[#FFED92] rounded-[4px]">
                    <span className="text-[14px] leading-[16px] flex flex-wrap xs:gap-3">
                        {bannerLabel[0]}
                    </span>
                </div>
            )}
            

            {product?.images?.nodes.length > 0 ?
                <img src={product.images.nodes[0].url} className="h-[300px] w-full max-w-[90%] mx-auto object-cover group-hover:scale-105  ease-out duration-300"/>
              : <img src="/app/assets/whey.png" className="h-[300px] w-full max-w-[90%] mx-auto object-cover group-hover:scale-105  ease-out duration-300"/> 
            }

            {isSubscription ? (
                <>
                    <div class="flex items-center space-x-[10px] mb-[10px]">  
                        <label class="relative inline-flex items-center cursor-pointer bg-[#F6F6F5] p-[10px] pr-[8px] w-full">
                            <input type="radio" name="option" value="option1" class="hidden peer" />
                            <span class="w-[16px] h-[16px] rounded-full border-1 border-[#1B1F23] transition-colors ease-in-out"></span>
                            <span class="absolute w-[8px] h-[8px] left-[14px] rounded-full  border-gray-400 peer-checked:border-blue-500 peer-checked:bg-[#1B1F23] peer-checked:ring-[#1B1F23] transition-colors ease-in-out"></span>
                            <span className='text-left ml-[8px]'>
                                <span class="block text-[11px] font-light">One-Time Purchase</span>
                                <span class="block text-[12px]">$49.95</span>
                            </span>

                        </label>

                        <label class="relative inline-flex items-center cursor-pointer bg-[#F6F6F5] p-[10px] w-full">
                            <input type="radio" name="option" value="option2" class="hidden peer" />
                            <span class="w-[16px] h-[16px] rounded-full border-1 border-[#1B1F23]transition-colors ease-in-out">                                
                            </span>
                            <span class="absolute w-[8px] h-[8px] left-[14px] rounded-full  border-gray-400 peer-checked:border-blue-500 peer-checked:bg-[#1B1F23] peer-checked:ring-[#1B1F23] transition-colors ease-in-out"></span>
                            <span className='text-left ml-[8px]'>
                                <span class="block text-[11px] font-light">Subscribe & Save</span>
                                <span class="block text-[12px]">$49.95 <span className='text-[10px] text-[#802608]'>Save 10%</span></span>
                            </span>
                        </label>
                    </div>

                    <button
                        className={[
                        'font-medium text-[14px] w-full rounded-[8px] px-[24px] py-[12px] text-center text-white bg-[#1B1F23] mr-[15px] cursor-pointer hover:opacity-70 ease-out duration-300',
                        ].join(' ')}
                    >
                        Add to Cart - $49.95
                    </button>
                    <a href="#" className='hover:underline decoration-solid mt-[15px] text-[12px] font-light ease-out duration-300'>View Details</a>
                </>
            ) : (
                <>
                    {productLabels?.length > 0 && (
                        <ul className='flex mt-[15px]'>
                            {productLabels.map((label, index) => {
                            return <li key={index} className={`${tagBackground} rounded-md max-w-fit py-1 px-3 text-[10px] text-black flex flex-row justify-center items-center mr-[5px]`}>
                                    <span className='block h-[5px] w-[5px] rounded-full bg-[#101226] mr-[4px]'></span>{label}
                                </li>
                            })}
                        </ul>
                    )}
                
                    <div className='text-left mt-[14px]'>
                        <Body className="mb-[5px] text-[16px] text-[#1B1F23]">
                            {product?.title}
                        </Body>
                        <Body className="text-[#1B1F23] opacity-70 text-[13px]">{product?.description}</Body>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-[10px]'>
                        <ul className='flex'>
                            <li>
                                <StarBlackSVG/>
                            </li>
                            <li>
                                <StarBlackSVG/>
                            </li>
                            <li>
                                <StarBlackSVG/>
                            </li>
                            <li>
                                <StarBlackSVG/>
                            </li>
                        </ul>
                        <div>
                            <button
                                className={[
                                'max-w-[200px] rounded-md px-[15px] py-[5px] text-center text-xs font-light disabled:opacity-50  lg:text-base lg:font-normal bg-[#1B1F23] text-white cursor-pointer hover:opacity-70 ease-out duration-300',
                                ].join(' ')}
                            >
                                {!bundle ? `Add • $49.95` : `Add to Cart`}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductCard;

ProductCard.defaultProps = {
    background: 'bg-white',
    tagBackground: 'bg-[#F6F6F5]',
    bundle: false
};