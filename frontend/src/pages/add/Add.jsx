import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [addData, setaddData] = useState({});
  const navigate = useNavigate();
  const handleAdd = async () => {
    const url = " http://localhost:5000/details";
    const { data } = await axios.post(url, addData);
    console.log(data);
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="form">
        <div className="mt-5">
          <label className="me-5">name</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={addData.name}
            onChange={(e) => setaddData({ ...addData, name: e.target.value })}
          />
        </div>
        <div className="mt-5">
          <label className="me-4 ">amount</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={addData.amount}
            onChange={(e) => setaddData({ ...addData, amount: e.target.value })}
          />
        </div>
        <div className="mt-5 ms-5">
          <Link to={"/add"}>
            <Button onClick={handleAdd} className="" variant="contained">
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
