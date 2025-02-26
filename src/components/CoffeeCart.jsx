import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, supplier, taste, category, details, photo } =
    coffee;

  const heandleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="p-10 ml-10">
        <img className="w-[180px]" src={photo} alt="Movie" />
      </figure>

      <div className="flex justify-between w-full pt-20  mt-4 mx-6">
        <div className="p-15 space-y-3">
          <h2 className="card-title">Name : {name}</h2>
          <p>Price : {price}</p>
          <p>Suppler : {supplier}</p>
        </div>

        <div className="flex flex-col space-y-4">
          <button className="btn cursor-pointer bg-[#D2B48C] text-white">
            View
          </button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn cursor-pointer bg-[#3C393B] text-white">
              Edit
            </button>
          </Link>
          <button
            onClick={() => heandleDelete(_id)}
            className="btn cursor-pointer bg-[#EA4744] text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
