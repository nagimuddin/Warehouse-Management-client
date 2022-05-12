import React from "react";

const AddItems = () => {
  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = {name, email};

    // send data server
    fetch('http://localhost:5000/user',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log('success', data)
        alert('user added successfully!!!');
        event.target.reset();
    })
}

  return (
    <div className="w-50 mx-auto my-3">
      <h2 className="text-center">Please Add a Item</h2>
      <form className="d-flex flex-column" onSubmit={handleAddUser}>
        <input  />
        <input className="mb-2" type="text" name="name" placeholder="name" required/>
        <input className="mb-2" type="text" name="discription" placeholder="description" required />
        <input className="mb-2" type="number" name="name" placeholder="price"  required/>
        <input className="mb-2" type="text" name="name" placeholder="Photo URL"  required/>
        <input type="submit" value="Add Items" />
      </form>
    </div>
  );
};

export default AddItems;
