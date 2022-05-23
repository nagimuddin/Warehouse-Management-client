import React from "react";
import { useNavigate } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

const ProductItem = () => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();

  const navigateToProductDetails = (id) => {
    navigate(`/product/2@${id}`);;
  }

  return (
    <>
      {
        products.map((product) => {
          return(
            <div key={product._id} className='w-full md:w-1/2 xl:w-1/3 px-4 mt-8'>
              <div className='rounded-xl relative'>
                <img
                  className='rounded-xl rounded-b-none w-full md:h-[310px] xl:h-[300px] object-cover'
                  src={product.img}
                  alt=''
                />
                <span className='py-1 px-3 absolute bottom-4 left-4 inline-block uppercase text-sm font-semibold rounded bg-indigo-600 text-white'>
                  ${product.price}
                </span>
              </div>
              <div className='py-6 px-8 bg-[#F6F6F6] rounded-[10px] rounded-t-none transition-all ease-in-out duration-300'>
                <ul className='flex flex-wrap items-center gap-4'>
                  <li>
                    <span className='font-semibold text-black'>Supplier:</span>
                    <span className='ml-2 text-[#777777]'>{product.powerdBy}</span>
                  </li>
                  <li>
                    <span className='font-semibold text-black'>Quantity:</span>
                    <span className='ml-2 text-[#777777]'>{product.quantity}</span>
                  </li>
                </ul>
                <h3 className='mt-4 font-bold text-xl text-black hover:text-indigo-600 cursor-pointer transition-all ease-in-out duration-300'>
                  <span onClick={() => navigateToProductDetails(product._id)}>{product.name}</span>
                </h3>
                <p className='mt-4 text-[#777777]'>
                  {product.content}
                </p>
                <button onClick={() => navigateToProductDetails(product._id)} className="button button-indigo mt-5 inline-block shadow-lg">Manage</button>
              </div>
            </div>

          );
        }).slice(0, 6)
      }
    </>
  );
};

export default ProductItem;
