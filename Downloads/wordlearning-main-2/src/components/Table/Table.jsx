import React from "react";
import { observer } from "mobx-react-lite";
import Tableraw from "./Tableraw";
import style from "./Table.module.css";

const Table = observer(({ store }) => {
  const onDelete = (wordToDelete) => {
    store.deleteWord(wordToDelete);
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
        {store.learnedWords.map((item) => (
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
});

export default Table;
