import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Monster rollodex</h1>

      <SearchBox />

      <CardList />
      
    </div>
  );
}

export default App;
