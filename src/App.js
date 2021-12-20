import './App.scss';
import ApiData from './json/DataBase';
import { Api } from './json/DataBase';
import Header from "./components/Header/Header"
import SubCaterogy from "./components/SubCategory/SubCategory"
import SubCategori from './components/SubCategory/SubCategory'

function App() {
  return (
    <div className="App">
      <ApiData />
      {console.log(Api)}
      <Header />
      <SubCaterogy/>
      
    </div>
  );
}

export default App;
