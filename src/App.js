import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from './components/Category/Category';
import CategoryTemplate from "./components/Category/CategoryTemplate"
import SubCategory from "./components/SubCategory/SubCategory"

// Header and Footer
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
    
      <Header />
      <Router>
      <Category/>
     <Routes>
        <Route path="/SubCategory/:id" element={<SubCategory/>}/>
      </Routes> 
      </Router> 
     
    </div>
  );
}

export default App;
