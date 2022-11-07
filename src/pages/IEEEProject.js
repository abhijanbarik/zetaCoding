import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IEEEProject.module.css";

const IEEEProject = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/registration-page");
  }, [navigate]);

  return (
    <div className={styles.iEEEProjectDiv}>
      <img className={styles.icon} alt="" src="../5071152-2625952-1@2x.png" />
      <h1 className={styles.detailsAboutIEEEProjects}>
        Details About IEEE Projects
      </h1>
      <div className={styles.weOfferABroadPoolOfIEEE}>
        We offer a broad pool of IEEE projects in the downpour of Computer
        Science engineering and Information Science engineering. Designing
        dependent on the most recent innovation for the students. The activities
        are created dependent on IEEE paper procedures.
      </div>
      <div className={styles.weOfferProjectsOnTheLates}>
        We offer projects on the latest Technologies:
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.machineLearningDiv}>Machine Learning</div>
        <div className={styles.artificialIntelligenceDeepL}>
          <p className={styles.artificialIntelligenceP}>
            Artificial Intelligence
          </p>
          <p className={styles.artificialIntelligenceP}>&nbsp;</p>
          <p className={styles.artificialIntelligenceP}>Deep Learning</p>
          <p className={styles.artificialIntelligenceP}></p>
          <p className={styles.artificialIntelligenceP}>Internet of Things</p>
          <p className={styles.artificialIntelligenceP}></p>
          <p
            className={styles.artificialIntelligenceP}
          >{`Data Science: Data Mining `}</p>
          <p className={styles.artificialIntelligenceP}>&nbsp;</p>
          <p className={styles.artificialIntelligenceP}>{`Warehousing  `}</p>
          <p className={styles.artificialIntelligenceP}>&nbsp;</p>
          <p className={styles.artificialIntelligenceP}>Big Data</p>
          <p className={styles.artificialIntelligenceP}></p>
          <p className={styles.artificialIntelligenceP}>
            Block chain Technology
          </p>
          <p className={styles.artificialIntelligenceP}>&nbsp;</p>
          <p
            className={styles.artificialIntelligenceP}
          >{`Cloud Computing & Security
`}</p>
          <p className={styles.artificialIntelligenceP}></p>
          <p className={styles.artificialIntelligenceP}>
            Wireless Networking and Network security
          </p>
          <p className={styles.artificialIntelligenceP}></p>
          <p className={styles.artificialIntelligenceP}>Robotics</p>
          <p className={styles.artificialIntelligenceP}></p>
          <p className={styles.imageProcessingAnd}>
            Image Processing and Computer Vision
          </p>
        </div>
      </div>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <b className={styles.rEGISTERNOWB}>REGISTER NOW</b>
      </button>
    </div>
  );
};

export default IEEEProject;
