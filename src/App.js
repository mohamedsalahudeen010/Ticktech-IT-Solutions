import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import About from './components/About/About';
import { themeContext } from './context';
import { useContext} from 'react';
import Home from './components/Home/Home';

function App() {


  const theme=useContext(themeContext)
  const lightMode=theme.state.lightTheme;
  

  
  return (
    <div className="App"
    style={{backgroundColor:lightMode?"whitesmoke":"black",
    color:lightMode?"black":""}}>
       
       <NavBar/>
       <Home/>
      <About/>
    </div>
  );
}

export default App;

