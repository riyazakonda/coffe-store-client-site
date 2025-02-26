import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();
  const heandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addCoffe = { name, price, supplier, taste, category, details, photo };
    console.log(addCoffe);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee add successfully !",
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
        Add New Coffee
      </h2>
      <p className=" lg:w-4xl text-center mx-auto text-xl my-5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={heandleSubmit} className="space-y-5  p-4 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 space-x-3">
          <div className="">
            <label className="font-semibold text-gray-600 text-xl">Name</label>
            <div className="w-full">
              <input
                type="text"
                name="name"
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
                type=""
                name="photo"
                placeholder="Photo URL"
                className="w-full border-gray-200 pl-3 py-2 rounded-md focus:border-gray-500 focus:bg-gray-200 mt-2"
              />
            </div>
          </div>
        </div>
        <input
          className="text-2xl font-family w-full py-2 mt-5 bg-[#D2B48C] text-gray-800 cursor-pointer rounded-md"
          type="submit"
          value="AddCoffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
