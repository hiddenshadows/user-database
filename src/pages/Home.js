import {Button} from 'react-bootstrap'
import '../App.css';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Log in or Sign up to create new tasks <br></br>or start working on them!</h1>  
        <Button href="login" variant="warning" size="lg" className='my-2'>
            Sign Up
        </Button>{' '}
        <Button href="login" variant="light" size="md">
            Login
        </Button>{' '}
      </header>
    </div>
  );
}

export default Home;