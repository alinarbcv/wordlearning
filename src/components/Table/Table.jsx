import React, { useContext } from "react";
import { WordContext } from "../../WordContext";
import Tableraw from "./Tableraw";
import style from "./Table.module.css";

function Table() {
  const { learnedWords, setLearnedWords } = useContext(WordContext);

  const onDelete = (wordToDelete) => {
    setLearnedWords((prevWords) =>
      prevWords.filter((word) => word.word !== wordToDelete)
    );
  };

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Word</th>
          <th>Translate</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {learnedWords.map((item) => (
          <Tableraw
            key={item.word}
            word={item.word}
            translate={item.translate}
            onDelete={() => onDelete(item.word)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
