/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import { useSingleProductQuery } from "../../../redux/api/apiSlice";
import { UseQueryHookResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useAppDispatch } from "../../../redux/hook";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: product }: UseQueryHookResult<any, any> = useSingleProductQuery(
    router.query.productId
  );

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto h-48 p-10 object-cover object-center bg-inherit rounded"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-3">
            <h2 className="text-sm title-font text-gray-500 tracking-widest text-black">
              {product?.category.toUpperCase()}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-4">
              <span className="title-font font-medium text-2xl text-slate-500">
                $ {product?.price}
              </span>
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                }}
                className={`flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout children={page} title="home" />;
};

export default ProductDetails;
