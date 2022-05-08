import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data)
      const url = ``
      fetch(url, {
          method: 'POST',
          header: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
          console.log(result);
      })
};

  return (
    <div className="w-50 mx-auto my-3">
      <h2 className="text-center">Please Add a Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="name" {...register("description")} />
        <input className="mb-2" placeholder="description" {...register("Name", { required: true, maxLength: 20 })} />
        <input className="mb-2" placeholder="price" type="number" {...register("price")} />
        <input className="mb-2" placeholder="Photo URL" type="text" {...register("img")} />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddItems;
