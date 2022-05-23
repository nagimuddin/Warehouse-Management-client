import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

const Manage = () => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();

  const handelDelete = id => {
    const process = window.confirm("Are you sure you want to delete this item?");

    if (process) {
      const url = `https://automobilereact.herokuapp.com/product/${id}`;

      fetch(url, {
        method: "DELETE",
      })
      .then(res => res.json())
        .then(result => {
          console.log(result);
          setProducts(products.filter(product => product._id !== id));
      });
    }
  }

  const navigateToProductDetails = (id) => {
    navigate(`/product/2@${id}`);
  };

  return (
    <>
      <div className='container max-w-6xl mx-auto py-24 px-6'>
        <div className="mb-8">
          <Link to='/add' className='button button-black'>Add New Item</Link>
        </div>
        <div className='flex flex-col gap-8'>
          {products.map((product) => {
            return (
              <div
                key={product._id}
                className='w-full flex flex-col md:flex-row'>
                <div className='rounded-xl relative grow-0 shrink-0 basis-auto md:w-2/5 xl:w-2/5'>
                  <img
                    className='rounded-xl md:rounded-l-xl md:rounded-r-none w-full md:h-[310px] xl:h-[300px] object-cover'
                    src={product.img}
                    alt=''
                  />
                  <span className='py-1 px-3 absolute bottom-4 left-4 inline-block uppercase text-sm font-semibold rounded bg-indigo-600 text-white'>
                    ${product.price}
                  </span>
                </div>
                
                <div className='inventory-content mt-8 md:mt-0 py-6 px-8 bg-[#F6F6F6] rounded-[10px] md:rounded-r-[10px] md:rounded-l-none transition-all ease-in-out duration-300 hover:bg-slate-700'>
                <h3 className='mb-4 font-bold text-xl text-black hover:text-indigo-600 transition-all ease-in-out duration-300'>
                    <button
                      onClick={() => navigateToProductDetails(product._id)}>
                      {product.name}
                    </button>
                  </h3>
                  <ul className='flex flex-wrap items-center gap-4'>
                    <li>
                      <span className='font-semibold text-black'>
                        Supplier:
                      </span>
                      <span className='ml-2 text-[#777777]'>
                        {product.powerdBy}
                      </span>
                    </li>
                    <li>
                      <span className='font-semibold text-black'>
                        Quantity:
                      </span>
                      <span className='ml-2 text-[#777777]'>
                        {product.quantity}
                      </span>
                    </li>
                  </ul>
                  <p className='mt-4 text-[#777777]'>
                    {product.about?.slice(0, 200)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateToProductDetails(product._id)}
                    className='button button-black inline-block shadow-lg'>
                    Manage
                  </button>
                  <button
                    onClick={() => handelDelete(product._id)}
                    className='button button-indigo inline-block shadow-lg'>
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Manage;
