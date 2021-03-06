import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from "../../Images/Blog/blog.jpg";
import blogImage2 from "../../Images/Blog/blog2.jpg";
import blogImage3 from "../../Images/Blog/blog3.jpg";

const BlogItem = () => {
  const items = [
    {
      title: "There are many variations of passages orem psum available",
      img: blogImage,
      description:
        "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
    },
    {
      title: "The ultimate UX and UI guide to card design",
      img: blogImage2,
      description:
        "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
    },
    {
      title: "Creative Card Component designs graphic elements",
      img: blogImage3,
      description:
        "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
    },
  ];
  return (
    <>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          {items.map((item, index) => {
            return (
              <article key={index} className='w-full md:w-1/2 xl:w-1/3 px-4'>
                <div className='bg-white rounded-lg overflow-hidden mb-10'>
                  <img src={item.img} alt='' className='w-full' />
                  <div className='p-8 sm:p-9 md:p-7 xl:p-9 text-center'>
                    <h3>
                      <Link
                        to='#'
                        className='
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          '>
                        {item.title}
                      </Link>
                    </h3>
                    <p className='text-base text-body-color leading-relaxed mb-7'>
                      {item.description}
                    </p>
                    <Link
                      to='#'
                      className='
                               inline-block
                               py-2
                               px-7
                               border border-[#E5E7EB]
                               rounded-full
                               text-base text-body-color
                               font-medium
                               hover:border-red-500 hover:bg-primary hover:text-indigo-600
                               transition
                               '>
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogItem;