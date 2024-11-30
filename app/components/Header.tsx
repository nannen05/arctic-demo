import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from '@remix-run/react';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="header flex fixed left-1/2 -translate-x-2/4  top-[30px] z-11 w-full mx-auto max-w-[var(--content-max-width)] h-[var(--header-height)]  px-[20px] 2xl:px-0">
        <div className='flex bg-white items-center justify-between rounded-lg w-full px-[20px] shadow'>
          <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
            <strong className='uppercase font-extrabold'>uncmfrt.com</strong>
          </NavLink>
          <HeaderMenu
            menu={menu}
            viewport="desktop"
            primaryDomainUrl={header.shop.primaryDomain.url}
            publicStoreDomain={publicStoreDomain}
          />
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </div>

    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport} items-center`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      <SearchToggle />
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
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

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <button
            className={[
            'hidden lg:flex  items-center font-medium text-[14px] max-w-[200px] rounded-[8px] px-[16px] pr-[12px] py-[6px] text-center text-black bg-[#E4E4E4] cursor-pointer hover:opacity-70 ease-out duration-300',
            ].join(' ')}
        >
            <span className='block mr-[10px]'>Men</span>
            <span className='flex items-center justify-center rounded-full bg-white h-[33px] w-[33px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_11398_938)">
                <path d="M8 8C10.206 8 12 6.206 12 4C12 1.794 10.206 0 8 0C5.794 0 4 1.794 4 4C4 6.206 5.794 8 8 8ZM8 1.33333C9.47067 1.33333 10.6667 2.52933 10.6667 4C10.6667 5.47067 9.47067 6.66667 8 6.66667C6.52933 6.66667 5.33333 5.47067 5.33333 4C5.33333 2.52933 6.52933 1.33333 8 1.33333ZM14 15.3333C14 15.7013 13.702 16 13.3333 16C12.9647 16 12.6667 15.7013 12.6667 15.3333C12.6667 13.3207 11.3833 11.6067 9.594 10.9533L8.58267 12.4707L9.31133 15.1307C9.43333 15.5747 9.04133 16.0007 8.51067 16.0007H7.48933C6.95867 16.0007 6.56733 15.5747 6.68867 15.1307L7.41733 12.4707L6.406 10.9533C4.61667 11.6067 3.33333 13.3207 3.33333 15.334C3.33333 15.702 3.03467 16.0007 2.66667 16.0007C2.29867 16.0007 2 15.702 2 15.334C2 12.026 4.692 9.334 8 9.334C11.308 9.334 14 12.0253 14 15.3333Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_11398_938">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
      </button>
      <button
          className={[
          'hidden lg:block font-medium text-[14px] max-w-[200px] rounded-[8px] px-[24px] py-[12px] text-center text-white bg-[#1B1F23] mr-[15px] cursor-pointer hover:opacity-70 ease-out duration-300',
          ].join(' ')}
      >
          Take The Quiz
      </button>
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn 
              ? 'Account' 
              : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M16.5 16.5C18.0625 16.5417 19.3542 17.0833 20.375 18.125C21.4167 19.1458 21.9583 20.4375 22 22C22 22.2917 21.9062 22.5312 21.7188 22.7188C21.5312 22.9062 21.2917 23 21 23H9C8.70833 23 8.46875 22.9062 8.28125 22.7188C8.09375 22.5312 8 22.2917 8 22C8.04167 20.4375 8.58333 19.1458 9.625 18.125C10.6458 17.0833 11.9375 16.5417 13.5 16.5H16.5ZM9.53125 21.5H20.4688C20.3229 20.5 19.8854 19.6667 19.1562 19C18.4271 18.3542 17.5417 18.0208 16.5 18H13.5C12.4583 18.0208 11.5729 18.3542 10.8438 19C10.1146 19.6667 9.67708 20.5 9.53125 21.5ZM15 15C13.875 14.9792 12.9271 14.5938 12.1562 13.8438C11.4062 13.0729 11.0208 12.125 11 11C11.0208 9.875 11.4062 8.92708 12.1562 8.15625C12.9271 7.40625 13.875 7.02083 15 7C16.125 7.02083 17.0729 7.40625 17.8438 8.15625C18.5938 8.92708 18.9792 9.875 19 11C18.9792 12.125 18.5938 13.0729 17.8438 13.8438C17.0729 14.5938 16.125 14.9792 15 15ZM15 8.5C14.2917 8.52083 13.6979 8.76042 13.2188 9.21875C12.7604 9.69792 12.5208 10.2917 12.5 11C12.5208 11.7083 12.7604 12.3021 13.2188 12.7812C13.6979 13.2396 14.2917 13.4792 15 13.5C15.7083 13.4792 16.3021 13.2396 16.7812 12.7812C17.2396 12.3021 17.4792 11.7083 17.5 11C17.4792 10.2917 17.2396 9.69792 16.7812 9.21875C16.3021 8.76042 15.7083 8.52083 15 8.5Z" fill="#0E0804"/></svg>)}
          </Await>
        </Suspense>
      </NavLink>
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset cursor-pointer" onClick={() => open('search')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
        <path d="M23.375 21.7188C23.6875 22.0729 23.6979 22.4271 23.4062 22.7812C23.2604 22.9271 23.0833 23 22.875 23C22.6875 23 22.5 22.9271 22.3125 22.7812L18.125 18.5938C17 19.5104 15.6562 19.9792 14.0938 20C12.2604 19.9583 10.7396 19.3229 9.53125 18.0938C8.30208 16.8646 7.66667 15.3333 7.625 13.5C7.66667 11.6667 8.29167 10.1354 9.5 8.90625C10.7292 7.67708 12.2604 7.04167 14.0938 7C15.9271 7.04167 17.4583 7.67708 18.6875 8.90625C19.9167 10.1354 20.5521 11.6667 20.5938 13.5C20.5729 15.0417 20.1042 16.3854 19.1875 17.5312L23.375 21.7188ZM9.125 13.5C9.16667 14.9167 9.65625 16.0938 10.5938 17.0312C11.5312 17.9688 12.7083 18.4583 14.125 18.5C15.5417 18.4583 16.7188 17.9688 17.6562 17.0312C18.5938 16.0938 19.0833 14.9167 19.125 13.5C19.0833 12.0833 18.5938 10.9062 17.6562 9.96875C16.7188 9.03125 15.5417 8.54167 14.125 8.5C12.7083 8.54167 11.5312 9.03125 10.5938 9.96875C9.65625 10.9062 9.16667 12.0833 9.125 13.5Z" fill="#0E0804"/>
      </svg>
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      className='relative'
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M11.5 12V10.5C11.5208 9.5 11.8646 8.67708 12.5312 8.03125C13.1771 7.36458 14 7.02083 15 7C16 7.02083 16.8229 7.36458 17.4688 8.03125C18.1354 8.67708 18.4792 9.5 18.5 10.5V12H20.5C20.9167 12.0208 21.2708 12.1667 21.5625 12.4375C21.8333 12.7292 21.9792 13.0833 22 13.5V20C21.9792 20.8542 21.6875 21.5625 21.125 22.125C20.5625 22.6875 19.8542 22.9792 19 23H11C10.1458 22.9792 9.4375 22.6875 8.875 22.125C8.3125 21.5625 8.02083 20.8542 8 20V13.5C8.02083 13.0833 8.16667 12.7292 8.4375 12.4375C8.72917 12.1667 9.08333 12.0208 9.5 12H11.5ZM13 12H17V10.5C16.9792 9.9375 16.7812 9.46875 16.4062 9.09375C16.0312 8.71875 15.5625 8.52083 15 8.5C14.4375 8.52083 13.9688 8.71875 13.5938 9.09375C13.2188 9.46875 13.0208 9.9375 13 10.5V12ZM9.5 13.5V20C9.52083 20.4167 9.66667 20.7708 9.9375 21.0625C10.2292 21.3333 10.5833 21.4792 11 21.5H19C19.4167 21.4792 19.7708 21.3333 20.0625 21.0625C20.3333 20.7708 20.4792 20.4167 20.5 20V13.5H18.5V15.25C18.4583 15.7083 18.2083 15.9583 17.75 16C17.2917 15.9583 17.0417 15.7083 17 15.25V13.5H13V15.25C12.9583 15.7083 12.7083 15.9583 12.25 16C11.7917 15.9583 11.5417 15.7083 11.5 15.25V13.5H9.5Z" fill="#0E0804"/>
        </svg>
      </span>
      {count === null ? <span>&nbsp;</span> : <span className='absolute text-[10px] font-bold top-[-5px] right-0'>{count}</span>}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
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
    // fontWeight: isActive ? 'bold' : undefined,
    // color: isPending ? 'grey' : 'black',
  };
}
