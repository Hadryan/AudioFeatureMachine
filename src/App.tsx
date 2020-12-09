import styles from './App.module.css';
import Title from './assets/title.svg';

const App = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location.href = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginContentContainer}>
        <img src={Title} alt="title" className={styles.titleImage} />
        <button onClick={handleLogin} className={styles.loginButton}>
          Login
        </button>
      </div>
      <div className={styles.creditBox}>
        Design & Code by Ivo Dejanović
      </div>
    </div>
  );
};

export default App;
