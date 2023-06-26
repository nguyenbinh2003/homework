import "./ShoeList.css";
import shoe from "./img/ProductPhoto.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "./img/star-fill.png";
// import { useState } from "react";
// import Star from "./star/Star";

function ShoeList({ name, id, money }) {
  // const [img, setImg] = useState(0);
  // function handleAddImage() {
  //   setImg(img + 1);
  // }

  // const imgages = [];
  // for (let i = 0; i < img; i++) {
  //   imgages.push(<img key={i} src={star} />);
  // }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={shoe} />
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text style={{margin:"0"}}>
          <strong>id: {id}</strong>
        </Card.Text>
        <Card.Img src={star} style={{ width: "24px" }} />
        <Card.Img src={star} style={{ width: "24px" }} />
        <Card.Img src={star} style={{ width: "24px" }} />
        <Card.Img src={star} style={{ width: "24px" }} />
        <Card.Img src={star} style={{ width: "24px" }} />
        <Card.Text>
          <strong>$ {money}</strong>
        </Card.Text>
        <Button variant="success">Available</Button>
      </Card.Body>
    </Card>
  );
}

export default ShoeList;
