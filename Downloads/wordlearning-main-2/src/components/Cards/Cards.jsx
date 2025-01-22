import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite"; 
import style from "./Cards.module.css";

const Cards = observer(({ store }) => {
  const [index, setIndex] = useState(0); 
  const [checked, setChecked] = useState(false); 

  
  useEffect(() => {
    store.fetchWords();
  }, [store]);

  const onCheckClick = () => {
    const currentWord = store.words[index]; 
    setChecked((prev) => !prev); 

   
    if (!store.learnedWords.some((word) => word.id === currentWord.id)) {
      store.addLearnedWord({
        ...currentWord,
        isLearned: true,
      });
    }
  };

  const onNextClick = () => {
    setIndex((prevIndex) => (prevIndex === store.words.length - 1 ? 0 : prevIndex + 1));
    setChecked(false); 
  };

  
  if (store.words.length === 0) {
    return <div>Loading words...</div>;
  }

  return (
    <div className={style.card}>
      <div className={style.cardBody}>
        {!checked ? (
          <h4 className={style.cardTitle}>{store.words[index]?.word}</h4>
        ) : (
          <>
            <p className={style.cardTranslate}>{store.words[index]?.translate}</p>
            <p className={style.cardText}>{store.words[index]?.transcription}</p>
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
});

export default Cards;
