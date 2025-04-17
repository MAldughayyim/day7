import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AddUser() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  function handleAddUser(e) {
    e.preventDefault();
    const addUser = async () => {
      await axios.post("http://localhost:3000/users", userData);
      toast.success("User added successfully");
      navigate("/user");
    };
    addUser();
  }

  return (
    <div className="container mt-5 mx-24">
      <div>
        <form onSubmit={handleAddUser}>
          <h1>Add User</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={userData.name}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              email
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword"
              value={userData.email}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                });
              }}
            />
            <button type="submit" className="btn btn-primary my-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
