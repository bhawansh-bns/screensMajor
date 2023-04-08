import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonSignIn1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onButtonSignUp1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
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
      <button className={styles.buttonreviewerlogin}>
        <div className={styles.buttonreviewerloginChild} />
        <button className={styles.buttonreviewerloginItem} />
        <div className={styles.reviewerLogin}>{`Admin Login `}</div>
      </button>
      <button className={styles.buttonadminlogin} autoFocus>
        <div className={styles.buttonreviewerloginChild} />
        <button className={styles.buttonreviewerloginItem} />
        <div className={styles.reviewerLogin1}>{`Reviewer Login `}</div>
      </button>
      <div className={styles.maincontainer}>
        <div className={styles.maincontainerChild} />
        <button className={styles.buttonsignin}>
          <div
            className={styles.buttonsignin1}
            onClick={onButtonSignIn1Click}
          />
          <button className={styles.signIn}>Sign in</button>
        </button>
        <button className={styles.buttonsignup}>
          <div
            className={styles.buttonsignin1}
            onClick={onButtonSignUp1Click}
          />
          <div className={styles.signUp}>Sign up</div>
        </button>
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.newUser}>New user?</div>
        <div className={styles.grepELicensing}>Grep E-Licensing</div>
        <button className={styles.appicon} autoFocus />
      </div>
    </div>
  );
};

export default LandingPage;
