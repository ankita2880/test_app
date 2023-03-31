import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const View = () => {
  const [detail, setdetail] = useState({});
  const { id } = useParams();
  console.log(id);

  const getDetail = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.get(URL);
    console.log(data);
    setdetail(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <Card className="ms-5 mt-5" sx={{ maxWidth: 345 }}>
        <Link to={"/"}>
          <Button size="small">Home</Button>{" "}
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail.name}
          </Typography>
          <Typography variant="body2  h3" color="text.secondary">
            {detail.amount}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default View;
