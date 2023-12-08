import React from "react";
import { client } from "../lib/client";
import { AllProducts } from "../components";

const Bags = ({ AllBagsProducts }) => {
  return (
    <div className="Allproducts-container">
      {AllBagsProducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[category == "Bags"]';
  const AllBagsProducts = await client.fetch(query);

  return {
    props: { AllBagsProducts },
  };
};

export default Bags;
