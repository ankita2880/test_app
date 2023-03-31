import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
const Edit = () => {
  const [detail, setdetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const getDetail = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.get(URL);
    console.log(data);
    setdetail(data);
  };
  const handleEdit = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.put(URL, detail);
    console.log(data);
    setdetail(data);
    navigate("/");
  };
  const handleDelete = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.delete(URL);

    navigate("/");
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <Card className="ms-5 mt-5" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Link to={"/"}>
            <Button size="small">Home</Button>{" "}
          </Link>
          <Typography gutterBottom variant="h5" component="div">
            {detail.name}
          </Typography>
          <Typography variant="body2  h3" color="text.secondary">
            {detail.amount}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/edit/:id`}>
            <Button size="small">Edit</Button>
          </Link>

          <Button onClick={handleDelete} size="small">
            delete
          </Button>
        </CardActions>
      </Card>

      <div className="d-flex justify-content-center mt-5">
        <div className="form">
          <div className="mt-5">
            <label className="me-5">name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={detail.name}
              onChange={(e) => setdetail({ ...detail, name: e.target.value })}
            />
          </div>
          <div className="mt-5">
            <label className="me-4 ">amount</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={detail.amount}
              onChange={(e) => setdetail({ ...detail, amount: e.target.value })}
            />
          </div>
          <div className="mt-5 ms-5">
            <Link to={"/add"}>
              <Button onClick={handleEdit} className="" variant="contained">
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
