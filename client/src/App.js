import './Style.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from '../src/screens/HomeScreen'
import Header from '../src/components/Header'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'

const App= () =>  {
  return (
    <Router>
      <Header />
        <Container>
          <Route path='/' component={HomeScreen} exact  />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Container>
    </Router>
  );
}

export default App;
