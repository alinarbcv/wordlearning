import styles from './Welcome.module.css';

function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.title}>Welcome to WordLearning</h1>
      <p className={styles.description}>
        Start improving your vocabulary with fun and interactive games.
      </p>
    </div>
  );
}

export default Welcome;