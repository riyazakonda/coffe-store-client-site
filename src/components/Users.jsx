import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loaderUser = useLoaderData();
  const [users, setUsers] = useState(loaderUser);

  const heandleUserDelete = (id) => {
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
        fetch(`http://localhost:5000/users/${id}`, {
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
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2>Users:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="font-family">Id</th>
              <th className="font-family">Name</th>
              <th className="font-family">Email</th>
              <th className="font-family">CreateTime</th>
              <th className="font-family">LastSignInTime</th>
              <th className="font-family">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.createTime}</th>
                <th>{user.lastSignInTime}</th>
                <th>
                  <button className="btn py-2 px-4 ">Edit</button>
                  <button
                    onClick={() => heandleUserDelete(user._id)}
                    className="btn py-2 px-4 ml-2"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
