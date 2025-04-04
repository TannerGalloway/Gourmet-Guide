import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/header.css";

function Header() {
  return (
    <div className="heading">
      <Row>
        <Col>
          <h1>Gourmet Guide</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
