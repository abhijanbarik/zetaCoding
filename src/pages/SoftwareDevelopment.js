import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SoftwareDevelopment.module.css";

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/registration-page");
  }, [navigate]);

  return (
    <div className={styles.softwareDevelopmentDiv}>
      <img className={styles.groupIcon} alt="" src="../group-624@2x.png" />
      <img className={styles.groupIcon1} alt="" src="../group-623.svg" />
      <div className={styles.groupDiv}>
        <img className={styles.vectoresIcon} alt="" src="../vectores.svg" />
        <div className={styles.groupDiv1}>
          <img
            className={styles.ilustracionIcon}
            alt=""
            src="../ilustracion.svg"
          />
        </div>
      </div>
      <b className={styles.detailsAboutSoftwareDevelop}>
        Details About Software Development
      </b>
      <h1 className={styles.weFollowAStandardTraining}>
        <p className={styles.weFollowA}>
          We follow a standard Training Management System base Enterprises
          Resource Planning Model to train our students. Software Training is
          our base assistance on different technology advancements and software
          areas. We offer three degrees of courses beginning from Basic,
          Advanced, and Expert levels.
        </p>
      </h1>
      <h1 className={styles.theSizzlingCoursesAreFron}>
        <p className={styles.weFollowA}>The sizzling courses are:</p>
        <p className={styles.weFollowA}>&nbsp;</p>
        <p className={styles.weFollowA}>Frontend Development</p>
        <p className={styles.weFollowA}>&nbsp;</p>
        <p className={styles.weFollowA}>Backend Development</p>
        <p className={styles.weFollowA}>&nbsp;</p>
        <p className={styles.weFollowA}>Full-Stack Development</p>
        <p className={styles.weFollowA}>&nbsp;</p>
        <p className={styles.javaPythonAnd}>
          Java, Python and other Technologies.
        </p>
      </h1>
      <h1 className={styles.weFollowAStandardTraining1}>
        <p className={styles.weFollowA}>
          We follow a standard Training Management System base Enterprises
          Resource Planning Model to train our students. Software Training is
          our base assistance on different technology advancements and software
          areas. We offer three degrees of courses beginning from Basic,
          Advanced, and Expert levels.
        </p>
      </h1>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <b className={styles.rEGISTERNOWB}>REGISTER NOW</b>
      </button>
    </div>
  );
};

export default SoftwareDevelopment;
