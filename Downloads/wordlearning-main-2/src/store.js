import { makeAutoObservable } from "mobx";

class WordStore {
  words = []; 
  learnedWords = [];

  constructor() {
    makeAutoObservable(this); 
  }

 
  async fetchWords() {
    try {
      const response = await fetch("https://api.datamuse.com/words?ml=dog");
      const data = await response.json();

      this.words = data.map((item, idx) => ({
        id: idx,
        word: item.word,
        translate: "No translation available",
        transcription: "No transcription available",
        isLearned: false,
      }));
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  }


  addWord(word) {
    this.words.push(word);
  }

  
  updateWord(id, updatedWord) {
    this.words = this.words.map((word) =>
      word.id === id ? { ...word, ...updatedWord } : word
    );
  }

  addLearnedWord(word) {
    if (!this.learnedWords.some((w) => w.id === word.id)) {
      this.learnedWords.push(word);
    }
  }


  deleteWord(wordToDelete) {
    this.learnedWords = this.learnedWords.filter(
      (word) => word.word !== wordToDelete
    );
  }
}

export const wordStore = new WordStore();
