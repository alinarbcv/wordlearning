import React, { useContext, useState, useEffect } from "react";
import { WordContext } from "../../WordContext";
import style from "./Cards.module.css";

function Cards() {
  const { tableData, setTableData, setLearnedWords } = useContext(WordContext);
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);


  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("https://api.datamuse.com/words?ml=dog");
        const data = await response.json();

        const formattedData = data.map((item, idx) => ({
          id: idx,
          word: item.word,
          translate: item.translate || "No translation available",
          transcription: item.transcription || "No transcription available",
          isLearned: false,
        }));

        setTableData(formattedData);
      } catch (error) {
        console.error("Error loading words:", error);
      }
    };

    fetchWords();
  }, [setTableData]);

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

  const onNextClick = () => {
    setIndex((prevIndex) => (prevIndex === tableData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={style.card}>
      <div className={style.cardBody}>
        {!checked ? (
          <h4 className={style.cardTitle}>{tableData[index]?.word || "Loading..."}</h4>
        ) : (
          <>
            <p className={style.cardTranslate}>{tableData[index]?.translate}</p>
            <p className={style.cardText}>{tableData[index]?.transcription}</p>
          </>
        )}
      </div>
      <div className={style.button}>
        <button onClick={onCheckClick}>
          {checked ? "Show word again" : "Check"}
        </button>
        <button onClick={onNextClick} className="card-add">
          Next word
        </button>
      </div>
    </div>
  );
}

export default Cards;
