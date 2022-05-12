import React from "react";
import './AddItems.css'

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
      <h2 className="title">Please Add Your Item</h2>
      <form className="d-flex flex-column" onSubmit={handleAddUser}>
        <input className="mb-2" type="text" name="name" placeholder="Email" required/>
        <input className="mb-2" type="text" name="name" placeholder="Name" required/>
        <input className="mb-2" type="text" name="name" placeholder="Photo URL"  required/>
        <input className="mb-2" type="text" name="name" placeholder="Powerd By"  required/>
        <input className="mb-2" type="text" name="name" placeholder="Year"  required/>
        <input className="mb-2" type="number" name="name" placeholder="Price"  required/>
        <input className="mb-2" type="text" name="discription" placeholder="About" required />
        <input className="additem-button" type="submit" value="Add Items" />
      </form>
    </div>
  );
};

export default AddItems;
