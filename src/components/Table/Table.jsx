import style from "./Table.module.css";
import Tableraw from "./Tableraw";

function Table(props){
    const {tableData,setTableData}=props;
return(
    <table className={style.table}>
        <tr>
            <th>Word</th>
            <th>Translate</th>
            <th>Transcription</th>
            <th> Which word would you like to repeat?</th>

        </tr>
       {
        tableData.filter(item=>item.isLearned).map(item=><Tableraw key={item.word} word={item.word} translate={item.translate} transcription={item.transcription} repeat={item.isLearned} />)
       }
    </table>
);
}

export default  Table ;