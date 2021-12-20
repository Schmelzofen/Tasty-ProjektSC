import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header and Footer
import Header from "./components/Header/Header"
<<<<<<< HEAD
import SubCaterogy from "./components/SubCategory/SubCategory"
import SubCategori from './components/SubCategory/SubCategory'
=======
import Footer from "./components/Footer/Footer"


// Pages
import Category from './components/Category/Category';
import SubCategory from './components/SubCategory/SubCategory';
import Detail from './components/Detail/Detail';
import CategoryTemplate from "./components/Category/CategoryTemplate"
>>>>>>> 0fed0cf326bebc44e09e2ddcf40c44e10fb81bea

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     
     
      <Header />
      <SubCaterogy/>
      
=======
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/category/:id' element={<CategoryTemplate />} />
          <Route path='/' element={<Detail />} />
        </Routes>
      </Router>
      <Footer />
>>>>>>> 0fed0cf326bebc44e09e2ddcf40c44e10fb81bea
    </div>
  );
}

export default App;
