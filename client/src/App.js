import "./styles/App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import Header from "../src/components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserPage from "./screens/UserPage";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <UserPage /> */}
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/user" component={UserPage} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
