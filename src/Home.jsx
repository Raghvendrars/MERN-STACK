import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get("/Student/");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`/Student/${id}`);
    toast.success("Successfully created!");
    loadStudent();
  };
  
  return (
    <>
      <div className="container mt-4">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">LDCE Students</h1>
            <p className="lead">This is a Student Details page.</p>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <Link to="/add" className="btn btn-md btn-success">
            Add Student
          </Link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((stdata, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{stdata._id}</td>
                <td>{stdata.fullname}</td>
                <td>{stdata.mobile}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary"
                    to={`edit/${stdata._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    class="btn btn-danger ml-4"
                    onClick={() => deleteUser(stdata._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
