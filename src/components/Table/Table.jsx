import style from "./Table.module.css";
import Tableraw from "./Tableraw";

function Table(props) {
    const { tableData, setTableData } = props;

    const WordIsLearned = (id) => {
        console.log(`Word with ID ${id} was selected for repetition.`);
        setTableData(prevData =>
          prevData.map(item =>
            item.id === id ? { ...item, isLearned: false } : item
          )
        );
      };

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Word</th>
          <th>Translate</th>
          <th>Transcription</th>
          <th>Which word would you like to repeat?</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.filter(item => item.isLearned).map(item => (
          <Tableraw
            key={item.word}
            word={item.word}
            translate={item.translate}
            transcription={item.transcription}
            repeat={item.isLearned}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;