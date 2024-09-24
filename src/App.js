import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
    	<Router>
	  	  <Routes>
	      	<Route path = "/home" element={<Main/>}/>
	      </Routes>
      </Router>
    </div>
  );
}

export default App;
