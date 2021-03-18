import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import User from "./User";

const Acoordion = () => {
  const [userData, setUserData] = useState([]);
  const TraitData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(data);
    } catch (error) {}
  };
  useEffect(() => {
    TraitData();
  }, []);
  return (
    <div>
      <Accordion
        defaultActiveKey="0"
        style={{ width: "50%", marginLeft: "25%" }}
      >
        {userData.map((el, index) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={index + 1}>
              <h3 className="Name Fstyle">{el.username}</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index + 1}>
              <Card.Body>
                <User userData={el} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default Acoordion;
