import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css"

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
    <div className="container Update-page-container">
      <div className="jumbotron jumbotron-fluid mt-4 mb-4">
        <div className="container">
          <h1 className="display-4">LDCE Students</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
        <div className="row">
            <div className="col">
              <a href="/">
                <button
                  className="btn btn-md btn-primary mt-2 mb-2"
                  style={{ float: "right" }}
                >
                  Back To Home
                </button>
              </a>
            </div>
          </div>
      </div>
      <div className="UpdateStudentForm">
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1" className="Form-Lables"><h6>Student Name</h6></label>
          <input
            type="text"
            name="fullname"
            class="form-control"
            id="exampleInputPassword1"
            required
            value={fullname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1" className="Form-Lables"><h6>Mobile</h6></label>
          <input
            type="text"
            name="mobile"
            class="form-control"
            id="exampleInputPassword1"
            value={mobile}
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Add Student
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddStudent;
