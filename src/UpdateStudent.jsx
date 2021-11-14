import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdateStudent = () => {
  let navigate = useNavigate();
  const { _id } = useParams();
  console.log(_id);
  const [studentData, setStudentData] = useState({
    fullname: "",
    mobile: "",
  });

  const { fullname, mobile } = studentData;
  const onInputChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/student/${_id}`, studentData);
    navigate("/");
  };
  
  const loadUser = async () => {
    const result = await axios.get(`/student/${_id}`);
    setStudentData(result.data);
  };
 
  return (
    <>
      <div className="container">
        <h2 className="text-center mb-4">Edit A User</h2>
        <div className="add-form-row">
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
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mb-3">
              <label for="exampleInputPassword1">Student Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="fullname"
                value={fullname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputPassword1">Mobile</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-warning btn-block mt-3">
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateStudent;
