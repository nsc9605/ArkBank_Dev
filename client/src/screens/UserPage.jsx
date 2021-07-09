import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import UsersDetails from "../components/UserDetails";

const User = (props) => {
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [currentBalance, setCurrentBalance] = useState("");
// const [transactions, setTransactions] = useState([]);

return (
  <>
    <Container>
      {/* {users.map((user) => ( */}
        <UsersDetails
          id={props.id}
          key={props.id}
          name={props.firstName + " " + props.lastName}
          email={props.email}
          currentBalance={props.currentBalance}
        />
          {/* <h1>User: {user.firstName + " " + user.lastName + user.email}</h1>
          <h3>Balance: {user.currentBalance}</h3> */}
          {/* <h4>Transactions: {transactions}</h4> */}
        {/* </UsersList> */}
      {/* ))} */}
    </Container>
  </>
);
};

export default User;
