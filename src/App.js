import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Learnedwords from './components/Learnedwords';
import Table from './components/Table/Table';
import { useState } from 'react';
import {data} from './components/Data/data';
import { useEffect } from 'react';
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Menu from './components/Header/Menu';
import Welcome from './components/Header/Welcome';
import { WordProvider, WordContext } from "./WordContext";









function App() {
 const [tableData,setTableData]=useState(data)
 const [index,setIndex]=useState(0);
 const [checked,setChecked]=useState(false);
 const [learnedWords, setLearnedWords] = useState([]);
 const onDelete = (wordToDelete) => {
  setLearnedWords((prevWords) =>
    prevWords.filter((word) => word.word !== wordToDelete)
  );
};

 useEffect(() => {

  const fetchWords = async () => {
    try {
     
      const response = await fetch('https://api.datamuse.com/words?ml=dog'); 
      const data = await response.json();

      const formattedData = data.map(item => ({
        word: item.word,
        translate: item.translate || 'No translation available',
        transcription: item.transcription  || 'No transkription available',
        isLearned: false,
      }));


      setTableData(formattedData); 
    } catch (error) {
      console.error('Fehler beim Abrufen der API:', error);
    }
  };

  fetchWords();
}, []);


 function onNextClick(){
  if (index===tableData.length-1) {
    setIndex(0);
  }else{
    setIndex(index+1);
  }
 }
 const onCheckClick = () => {
  const currentWord = tableData[index];

  setChecked((prevChecked) => !prevChecked);

  setLearnedWords((prevWords) => {
    if (!prevWords.some((word) => word.word === currentWord.word)) {
      return [...prevWords, { ...currentWord, isLearned: true }];
    }
    return prevWords;
  });
};


 
   return (
    <WordProvider>
      <Router>
        <div className="App">
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Game" element={<Cards />} />
            <Route
              path="/Table"
              element={
                <div>
                  <h2>You have learned these words:</h2>
                  <Table />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </WordProvider>
  );
}


export default App;




