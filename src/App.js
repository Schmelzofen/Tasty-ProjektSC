import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from './components/Category/Category';
import CategoryTemplate from "./components/Category/CategoryTemplate"

// Header and Footer
import Header from "./components/Header/Header"
import SubCaterogy from "./components/SubCategory/SubCategory"
import SubCategori from './components/SubCategory/SubCategory'

function App() {
  return (
    <div className="App">
    
      <Header />
      <Router>
      <Category/>
      {/* <Routes>
        <Routes path="/SubCategory/:id" component={<CategoryTemplate/>}/>
      </Routes> */}
      </Router> 
     
    </div>
  );
}

export default App;
