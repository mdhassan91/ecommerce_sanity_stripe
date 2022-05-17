import React from "react";
import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of variation</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type =="product"]';
  const products = await client.fetch(query);

  const banner_query = '*[_type =="banner"]';
  const bannerData = await client.fetch(banner_query);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
