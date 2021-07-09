import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import users from "../utils/users.json";

const UserDetails = (props) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [currentBalance, setCurrentBalance] = useState("");
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  // Loop through transactions to map
  const showTransactions = () => {
    let transactions = [];
    for (let i = 0; i < transactions.length; i++) {
      transactions.push();
    }
    return transactions;
  };

  return (
    <>
      {users.map((user) => ( // mapping through json file until db is set up
        <Card className="my-3">
          <Card.Header>Account Information</Card.Header>
          <Card.Body
          // show={show}
          // onHide={handleClose}
          id={user.id}
          key={user.id}
          name={user.firstName + " " + user.lastName}
          email={user.email}
          currentBalance={user.currentBalance}
          transactions={user.transactions}>
            <Card.Title>
              Users: {user.firstName + " " + user.lastName}
            </Card.Title>
            <Card.Title>Email: {user.email}</Card.Title>
          <Card.Text>Current Balance: ${user.currentBalance}</Card.Text>
          <Card.Text>Previous Transactions: </Card.Text>
          <Card.Body>
          <Card.Text>
          {showTransactions().map((transaction) => (
            <Card.List key={transaction}></Card.List>
            ))}
            </Card.Text>
            </Card.Body>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            {user.id}
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

export default UserDetails;
