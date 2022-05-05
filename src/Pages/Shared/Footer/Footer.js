import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="bg-dark">
      <Card.Body className="align-items-center">
        <div className="Card Image text-center">
          <img
            src="https://keymoto.templines.org/promo/assets/image/Logotype.png"
            alt=""
          />
        </div>
        <Card.Text className="align-items-center text-center text-white">
          Copyright: 2022
          <script>document.write(new Date().getFullYear())</script>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Footer;
