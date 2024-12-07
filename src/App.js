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




function App() {
  const [tableVisible, setTableVisible]=useState(false);
 const [tableData,setTableData]=useState(data)
 const [index,setIndex]=useState(0);
 const [checked,setChecked]=useState(false);

 useEffect(() => {

  const fetchWords = async () => {
    try {
     
      const response = await fetch('https://api.datamuse.com/words?ml=dog'); 
      const data = await response.json();

      const formattedData = data.map(item => ({
        word: item.word,
        translate: item.translate || 'No translation available',
        transcription: item.transcription  || 'No transkription available',
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
 function onCheckClick() {
  setChecked(prevChecked => !prevChecked); 
}
 
   return (
    <Router>
    <div className="App">
     <Header/>
     <Menu/>
     <Routes>
      <Route path="/" element={<Welcome />} /> 
          <Route
            path="/Game"
            element={
              <Cards
                title={tableData[index]?.word}
                description={tableData[index]?.transcription}
                translate={tableData[index]?.translate}
                onNextClick={onNextClick}
                onCheckClick={onCheckClick}
                setChecked={setChecked}
                checked={checked}
                setTableVisible={setTableVisible}
                tableVisible={tableVisible}
              />
            }
          />
          <Route
            path="/Table"
            element={tableVisible && <Table tableData={tableData} setTableData={setTableData} />}
          />
        </Routes>
        </div>
    </Router>
  );
}

export default App;





/* {  tableVisible && 
  <div className="table">
     <Learnedwords
     description="You have learnd this words:"
     />
      <Route path="/Table" element={tableVisible && <Table tableData={tableData} setTableData={setTableData} />}/>
    
  </div> 
}  */