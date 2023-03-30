import './App.css';
import './index.css';
import Quiz from './Pages/Quiz'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Quiz />} /> 
          
          </Routes>
      </Router>
  
    </div>
)}


export default App;
