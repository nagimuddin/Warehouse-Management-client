import React from "react";
import { Card } from "react-bootstrap";
import bike from '../../../images/bikes-bennar.jpg';

const Bennar = () => {
  return (
    <Card className="mt-3">
      <Card.Img src={bike} className="mw-100" alt="" />
      <Card.ImgOverlay>
        <Card.Title className="text-danger">BMW T9034 RX</Card.Title>
        <Card.Text className="text-info">
        SPORTINESS AT MAXIMUM POWER
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Bennar;
