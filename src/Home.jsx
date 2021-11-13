import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get("/Student/");
    setUser(result.data);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">LDCE Students</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <Link to="/add" className="btn btn-md btn-success">Add Student</Link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((student, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{student._id}</td>
                <td>{student.fullname}</td>
                <td>{student.mobile}</td>
                <td><Link to="/update">Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
