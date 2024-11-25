import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Learnedwords from './components/Learnedwords';
import Table from './components/Table/Table';
import { useState } from 'react';
import {data} from './components/Data/data';
import { useEffect } from 'react';



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
        translate: item.translate,
        transcription: item.transcription,
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
    <div className="App">
     <Header/>
     <Cards
     title={tableData[index]?.word}
     description={tableData[index]?.transcription}
     translate={tableData[index].translate}
     onNextClick={onNextClick}
     onCheckClick={onCheckClick}
     setChecked={setChecked} 
     checked={checked}
     setTableVisible={setTableVisible}
     tableVisible={tableVisible}
     />

   
   {  tableVisible && 
    <div className="table">
       <Learnedwords
       description="You have learnd this words:"
       />
      <Table tableData={tableData} setTableData={setTableData}/>
    </div> 
   }
 
    </div>
    
  );
}

export default App;
