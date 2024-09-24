import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/App/Header';
function App() {
  return (
    <div className="App">
    	<Router>
        <Header/>
	  	  <Routes>
	      	<Route path = "/" element={<Main/>}/>
	      </Routes>
      </Router>
    </div>
  );
}

export default App;
