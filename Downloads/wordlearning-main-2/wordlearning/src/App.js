import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Learnedwords from './components/Learnedwords';

function App() {
  return (
    <div className="App">
     <Header/>
     <Cards
     title="mother"
     description="person who has a kid"
     translare="мама"
     />
    <Learnedwords
    description="You have learnd this words:"
    />
    </div>
  );
}

export default App;
