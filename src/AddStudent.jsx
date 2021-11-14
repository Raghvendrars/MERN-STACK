import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AddStudent = () => {
  let navigate = useNavigate();
  const [studentdata, setStudent] = useState({
    fullname: "",
    mobile: "",
  });

  const { fullname, mobile } = studentdata;
  const onInputChange = (e) => {
    setStudent({ ...studentdata, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "/student/",
      studentdata
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid mt-4 mb-4">
        <div className="container">
          <h1 className="display-4">LDCE Students</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      {/* <form className="w-50" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label for="exampleInputEmail1">Student Name</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            required
            onChange={(e) => onInputChange(e)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Mobile Num</label>
          <input
            type="number"
            name="mobile"
            value={mobile}
            required
            onChange={(e) => onInputChange(e)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1">Student Name</label>
          <input
            type="text"
            name="fullname"
            class="form-control"
            id="exampleInputPassword1"
            value={fullname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1">Mobile</label>
          <input
            type="text"
            name="mobile"
            class="form-control"
            id="exampleInputPassword1"
            value={mobile}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
