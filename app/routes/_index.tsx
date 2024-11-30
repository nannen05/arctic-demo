import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import HeroBackground from '../components/HeroBackground';
import Goals from '../components/Goals'
import ProductSlider from '~/components/ProductSlider';
import ValueProps from '../components/ValueProps'
import Bundles from '../components/Bundles'
import IngredientSlider from '~/components/IngredientSlider';
import ReviewSlider from '../components/ReviewSlider';
import Banner from '../components/Banner'
import BlogPopularPosts from '~/components/BlogPopularPosts';
import Instagram from '../components/Instagram'
import ReviewBlock from '~/components/ReviewBlock';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context}: LoaderFunctionArgs) {
  // console.log('context', context.storefront)
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  // const productSliderItems =  await Promise.all([
  //   context.storefront.query(PRODUCT_QUERY, {
  //     variables: {ids: ["gid://shopify/Product/10128367943844", "gid://shopify/Product/10128367714468", "gid://shopify/Product/10128367943844", "gid://shopify/Product/10128367714468", "gid://shopify/Product/10128367943844"]},
  //   }),
  // ]);

  return {
    // productSliderItems,
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

    const productSliderItems = 
      context.storefront
        .query(PRODUCTS_QUERY, {
          variables: {ids: ["gid://shopify/Product/10128700997796", "gid://shopify/Product/10128367943844", "gid://shopify/Product/10128367714468", "gid://shopify/Product/10128367943844", "gid://shopify/Product/10128367714468", "gid://shopify/Product/10128367943844"]},
        })
        .then(data => {return data})
        .catch((error) => {
          // Log query errors, but don't throw them so the page can still render
          console.error(error);
          return null;
    })

    const bundleSliderItems = 
        context.storefront
        .query(PRODUCTS_QUERY, {
          variables: {ids: ["gid://shopify/Product/10128367943844", "gid://shopify/Product/10128367714468", "gid://shopify/Product/10128367943844", "gid://shopify/Product/10128367714468", "gid://shopify/Product/10128367943844"]},
        })
        .then(data => {return data})
        .catch((error) => {
          // Log query errors, but don't throw them so the page can still render
          console.error(error);
          return null;
    })

    console.log(bundleSliderItems, productSliderItems)

  return {
    bundleSliderItems,
    productSliderItems,
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home top-[-64px] relative">
      <HeroBackground />
      <ReviewBlock />
      <Goals />
      <ProductSlider products={data.productSliderItems} />
      <ValueProps />
      <ReviewSlider />
      <Bundles products={data.bundleSliderItems} />
      <IngredientSlider />
      <Banner />
      <BlogPopularPosts />
      <Instagram />
        {/* <FeaturedCollection collection={data.featuredCollection} />
        <RecommendedProducts products={data.recommendedProducts} />  */}
    </div>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <Link
                      key={product.id}
                      className="recommended-product"
                      to={`/products/${product.handle}`}
                    >
                      <Image
                        data={product.images.nodes[0]}
                        aspectRatio="1/1"
                        sizes="(min-width: 45em) 20vw, 50vw"
                      />
                      <h4>{product.title}</h4>
                      <small>
                        <Money data={product.priceRange.minVariantPrice} />
                      </small>
                    </Link>
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const PRODUCTS_QUERY = `#graphql
  query Products($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        description
        tags
        images (first: 1){
          nodes {
            url(transform: {maxHeight: 505, maxWidth: 365})
          }
        }
      }
    }
  }
` as const;

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
