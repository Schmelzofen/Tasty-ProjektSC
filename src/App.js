import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header and Footer
import Header from "./components/Header/Header"
import SubCaterogy from "./components/SubCategory/SubCategory"
import SubCategori from './components/SubCategory/SubCategory'

function App() {
  return (
    <div className="App">
     
     
      <Header />
      <SubCaterogy/>
      
    </div>
  );
}

export default App;
