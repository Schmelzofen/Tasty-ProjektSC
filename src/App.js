import './App.scss';
import ApiData from './json/DataBase';
import { Api } from './json/DataBase';
import Header from "./components/Header/Header"


function App() {
  return (
    <div className="App">
      <ApiData />
      {console.log(Api)}
      <Header />

    </div>
  );
}

export default App;
