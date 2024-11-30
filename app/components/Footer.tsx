import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import Headline  from './Headline';
import Body from './Body'
import InstagramSVG from '~/snippets/Instagram'
import TwitterSVG from '~/snippets/twitter'
import YoutubeSVG from '~/snippets/youtube'
import FacebookSVG from '~/snippets/facebook'

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {  
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer bg-[#F6F6F5] relative">
            <div className='lg:flex justify-between mx-auto max-w-[var(--content-max-width)] py-[80px] px-[20px] lg:px-[40px] 2xl:px-0'> 
              <div className='lg:max-w-[360px] mb-[50px] lg:mb-0'>
                <Headline variant="h4" className="text-[24px] pb-[20px] font-bold">
                  Be a Part of Our Journey
                </Headline>
                <Body className="font-light pb-[35px] opacity-80">Welcome to UNCMFRT. Sign up for exclusive content and we'll send you 10% off.</Body>
                <div className="flex">
                  <input type="email" placeholder="Enter your email" className="border border-gray-300 p-[12px] rounded-l-[8px] w-full max-w-[calc(100%-135px)] focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <button className="bg-[#1B1F23] text-white py-[12px] text-center rounded-r-[8px] w-[135px] focus:outline-none focus:ring-2 focus:ring-indigo-500">Subscribe</button>
                </div>
              </div>

              <div className="lg:grid grid-cols-4 gap-[60px]">

                <div className='mb-[30px] lg:mb-0'>
                  <h3 className="font-semibold text-lg mb-[25px]">Services</h3>
                  <ul>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Blog</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Product Reviews</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Our Story</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Delivery</a></li>
                  </ul>
                </div>

                <div className='mb-[30px] lg:mb-0'>
                  <h3 className="font-semibold text-lg mb-[25px]">Support</h3>
                  <ul>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Order Status</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Help Center</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Contact Us</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Returns</a></li>
                  </ul>
                </div>

                <div className='mb-[30px] lg:mb-0'>
                  <h3 className="font-semibold text-lg mb-[25px]">Important Link</h3>
                  <ul>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Maintenance</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Warranty</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Canadian Customers</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Setup</a></li>
                  </ul>
                </div>

                <div className='mb-[30px] lg:mb-0'>
                  <h3 className="font-semibold text-lg mb-[25px]">Legal</h3>
                  <ul>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Privacy Policy</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Accessibility</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Terms of Service</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Affiliate Program</a></li>
                    <li className='mb-[15px]'><a href="#" className="font-light mb-[20px] hover:underline ease-out duration-300">Articles</a></li>
                  </ul>
                </div>

              </div>

              <div>
                <Body className="text-[18px] leading-[21px] text-[#1B1F23] pb-[25px] font-semibold">
                  Contact Us
                </Body>
                <Body className="font-light mb-[6px]">Let Us Help You</Body>
                <Headline variant="h4" className="text-[24px] font-bold pb-[25px]">
                  (888) 860-0572
                </Headline>
                <Body className="text-[18px] leading-[21px] text-[#1B1F23] pb-[30px] font-semibold">
                  Connect With Us
                </Body>
                <div className='flex items-center max-w-[140px] justify-between'>
                    <a href="#">
                      <InstagramSVG/>
                    </a>
                    <a href="#">
                      <TwitterSVG/>
                    </a>
                    <a href="#">
                      <FacebookSVG/>
                    </a>
                    <a href="#">
                      <YoutubeSVG/>
                    </a>
                </div>
              </div>
            </div>
            <div className='absolute bottom-[80px] lg:bottom-[50px] h-[1px] bg-black opacity-10 w-screen'></div>
            <div className='text-center lg:flex items-center justify-between mx-auto max-w-[var(--content-max-width)] py-[13px]'>
              <Body className="font-light text-black opacity-70">
                © uncmfrt.com. All right reserved.
              </Body>
              <Body className="font-extralight text-[14px] text-black opacity-70">
                Made with and by Arctic Grey
              </Body>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  aboutUsMenu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <nav className="footer-menu" role="navigation">
      {}
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}
