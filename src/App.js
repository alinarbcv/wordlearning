import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Learnedwords from './components/Learnedwords';
import Table from './components/Table/Table';
import { useState } from 'react';
import {data} from './components/Data/data';
function App() {
  const [tableVisible, setTableVisible]=useState(false);
 const [tableData,setTableData]=useState(data)
 const [index,setIndex]=useState(0);
 function onNextClick(){
  if (index===tableData.length-1) {
    setIndex(0);
  }else{
    setIndex(index+1);
  }
 }
   return (
    <div className="App">
     <Header/>
     <Cards
     title={tableData[index].word}
     description={tableData[index].transcription}
     translate={tableData[index].translate}
     onNextClick={onNextClick}
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
