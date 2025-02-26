import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from "./coffeeCart";
import { BsCup } from "react-icons/bs";
import { useState } from "react";
const Main = () => {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-15">
      <div className="text-center space-y-3">
        <p className=" text-gray-600">--- Sip & Savor ---</p>
        <h2 className="text-5xl font-family  text-[#331A15]">
          Our Popular Products
        </h2>
        <Link to="/addCoffee">
          <button className="btn pr-4 text-white font-family text-xl py-2 px-8 bg-[#331A15]">
            Add Coffee <BsCup />
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {coffees.map((coffee) => (
          <CoffeeCart
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCart>
        ))}
      </div>
    </div>
  );
};

export default Main;
