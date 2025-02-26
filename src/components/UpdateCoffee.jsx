import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, price, supplier, taste, category, details, photo } =
    coffee;

  const navigate = useNavigate();
  const heandleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee Updated successfully !",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto mt-20 bg-[#F4F3F0] p-10">
      <h2 className="text-center text-5xl font-family text-gray-700">
        Update Coffee
      </h2>

      <form onSubmit={heandleUpdateCoffee} className="space-y-5  p-4 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 space-x-3">
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">Name</label>
            <div className="w-full">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Inter coffe name"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">price</label>
            <div className="w-full">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Inter coffe price"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 space-x-3">
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">
              Supplier
            </label>
            <div className="w-full">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Inter coffe supplier"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">Taste</label>
            <div className="w-full">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Inter coffe taste"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 space-x-3">
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">
              Category
            </label>
            <div className="w-full">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Inter coffe category"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">
              Details
            </label>
            <div className="w-full">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Inter coffe details"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
        </div>
        <div className="gridgrid-cols-1 space-x-3">
          <div className="">
            <label className="text-xl font-semibold text-gray-600">
              Photo URL
            </label>
            <div className="w-full">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
        </div>
        <input
          className="text-2xl font-family w-full py-2 mt-5 bg-[#D2B48C] text-gray-800 cursor-pointer rounded-md"
          type="submit"
          value="UpdateCoffe"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
