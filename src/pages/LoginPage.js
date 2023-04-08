import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.footer}>
        <div className={styles.footer1} />
        <div className={styles.footerTags}>
          <button className={styles.learn} autoFocus>
            Learn
          </button>
          <button className={styles.support}>Support</button>
          <button className={styles.aboutUs}>About Us</button>
          <button className={styles.contactUs}>Contact Us</button>
        </div>
      </div>
      <button className={styles.dontHaveAnContainer}>
        <span className={styles.dontHaveAnContainer1}>
          {`Don’t have an account? `}
          <span className={styles.signUp}>Sign up</span>
        </span>
      </button>
      <div className={styles.maincontainer}>
        <div className={styles.maincontainerChild} />
        <button className={styles.buttonsignin}>
          <div className={styles.buttonsigninChild} />
          <div className={styles.signIn}>Sign in</div>
        </button>
        <button className={styles.applebutton}>
          <div className={styles.applebuttonChild} />
          <div className={styles.apple}>Apple</div>
          <img
            className={styles.appleimageIcon}
            alt=""
            src="/appleimage@2x.png"
          />
        </button>
        <button className={styles.googlebutton}>
          <div className={styles.applebuttonChild} />
          <div className={styles.google}>Google</div>
          <img
            className={styles.googleimageIcon}
            alt=""
            src="/googleimage@2x.png"
          />
        </button>
        <div className={styles.password}>
          <input className={styles.passwordChild} type="text" />
          <div className={styles.password1}>Password</div>
        </div>
        <div className={styles.email}>
          <input className={styles.emailChild} type="text" />
          <div className={styles.email1}>Email</div>
        </div>
        <div className={styles.signInWithParent}>
          <i className={styles.signInWith}>Sign in with</i>
          <div className={styles.or}>
            --------------------OR--------------------
          </div>
        </div>
        <b className={styles.signIn1}>SIGN IN</b>
      </div>
    </div>
  );
};

export default LoginPage;
