import React from 'react'

import StarGoldSVG from '~/snippets/StarGold'

function ReviewBlock() {
  return (
    <section className='bg-[#F6F6F5]'>
        <div className='mx-auto px-8 lg:px-[40px] 2xl:px-0 text-center xl:text-left max-w-[var(--content-max-width)] justify-between py-[25px] xl:flex flex-row items-center justify-around'>
            <div className='max-w-[300px] mx-auto'>
                <p className='text-[14px] p-[14px] rounded-[8px] bg-[#0000001A] border border-black text-center'>#1 Doctor Recommended</p>
                <div className='flex mt-[12px] justify-center'>
                    <ul className='flex'>
                        <li>
                            <StarGoldSVG/>
                        </li>
                        <li>
                            <StarGoldSVG/>
                        </li>
                        <li>
                            <StarGoldSVG/>
                        </li>
                        <li>
                            <StarGoldSVG/>
                        </li>
                        <li>
                            <StarGoldSVG/>
                        </li>
                    </ul>
                    <p className='pl-[8px]'>12,000+ 5-star Reviews</p>
                </div>
            </div>
            <ul className='flex flex-col items-center md:flex-wrap md:flex-row mt-[30px] xl:mt-[0px]'>
                <li className='bg-white rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[11px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="app/assets/rolling_stone_logo.png" className='w-full object-cover h-[18px]'/>
                </li>
                <li className='bg-white rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[11px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="https://s3-alpha-sig.figma.com/img/0eeb/7644/950d12142c03c205d027fdbe85a37ede?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lcdwxq3i3Oi-C6k-cZwBxI6vzCQ-f0lm3oxNnZuVOYa0~mwgaxTcHz72S-buLS9TxuMdp7TakIHlL4qs7lRyY~OPgk1ORRws6BzOeEnJSbmhQ0yUXL9vGUP90Iuq7OHhVoNZeVetALxho1dnwlMNahfoPPnsoQzB22lhwDrA5Z5Wkl7eIC7I9ssijHFlHjvyt4o~bf5GJU3RRbou~pQ4FZR5xaNVGn-OZw6-BC2MtmAT8mgZA6DrQxqbZWTJR2kzzd3d1kDwXjlwlQJBasuKVO-5t4IPCTJo2NNzJvcOyyvvcIfWnvLvzViA4ucfnGK69hakId4QVqAOEgYXXEO3LA__" className='w-full object-cover h-[18px]'/>
                </li>
                <li className='bg-white rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[11px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="app/assets/la_weekly_logo.png" className='w-full object-cover h-[18px]'/>
                </li>
                <li className='bg-white flex items-center justify-center rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[14px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="https://s3-alpha-sig.figma.com/img/3eab/7449/deaa6b81047065479f61e34c12277549?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnoMUxS63jUK-YfWivCgwD8kJDxe3akp8kWVmA8lVkoNEZODwHc6ML-Gofh-MHkjEyCWNME3G1mFl5KPSraC3Pe~nwevDQbQEFLhHA8bO2lH2uAX5hWRwhsIr-4jCcneTYFwRm9bj3AQfMOnRVCiQvPRcLD78bAEirrKPxql4F7SBNHKz~l5MWe6Mv65f4ik7oO4OgHr1NDUuwP-ZpJx42gyS4vlkiVK-KdoYf~auiKzk1Q~Z3Rk8npOj-XBkRC7CwP6Khv60dMGYJ4elGvsvyipEPFlsm9ivGiplvQ77MqkzmLyE8P2EsB-wNP11FSPvYlK7RFAZONarTgwZ-yjzQ__" className='object-cover h-[12px] w-[37px]'/>
                </li>
                <li className='bg-white rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[14px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="app/assets/new_york_times_logo.png" className='w-full object-cover h-[12px] mx-auto'/>
                </li>
                <li className='bg-white flex items-center justify-center rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[11px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="app/assets/bbc_news_logo.png" className='object-cover h-[18px] w-[28px]'/>
                </li>
                <li className='bg-white rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[11px] px-[20px] mb-[8px] xl:mb-[0px] xl:mr-[8px]'>
                    <img src="app/assets/rolling_stone_logo.png" className='w-full object-cover h-[18px]'/>
                </li>
                <li className='bg-white rounded-[8px] max-w-[120px] xl:min-w-[120px] py-[11px] px-[20px]'>
                    <img src="app/assets/rolling_stone_logo.png" className='w-full object-cover h-[18px]'/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default ReviewBlock