import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header and Footer
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


// Pages
import Category from './components/Category/Category';
import SubCategory from './components/SubCategory/SubCategory';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/' element={<SubCategory />} />
          <Route path='/' element={<Detail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
