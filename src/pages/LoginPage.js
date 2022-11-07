import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPageDiv}>
      <div className={styles.frameDiv} />
      <img
        className={styles.illustrationIcon}
        alt=""
        src="../illustration.svg"
      />
      <img
        className={styles.womanStandingWithLaptop}
        alt=""
        src="../woman-standing-with-laptop.svg"
      />
      <input className={styles.usernameTextField} type="text" />
      <input className={styles.pWDTextField} type="text" />
      <b className={styles.zETACODINGB}>ZETA CODING</b>
      <div className={styles.lOGINDiv}>LOGIN</div>
      <div className={styles.usernameDiv}>Username</div>
      <div className={styles.passwordDiv}>Password</div>
      <button className={styles.frameButton}>
        <div className={styles.loginDiv}>login</div>
      </button>
    </div>
  );
};

export default LoginPage;
