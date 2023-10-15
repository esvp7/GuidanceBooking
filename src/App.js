import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
    <Router>
		<Routes>	
       <Route path="/" element={<Form />} />	
       <Route path="/success" exact element={[<Success />]}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
