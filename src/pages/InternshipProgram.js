import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InternshipProgram.module.css";

const InternshipProgram = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/registration-page");
  }, [navigate]);

  return (
    <div className={styles.internshipProgramDiv}>
      <img
        className={styles.coverBottomIcon}
        alt=""
        src="../cover-bottom@2x.png"
      />
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <b className={styles.rEGISTERNOWB}>REGISTER NOW</b>
      </button>
      <img className={styles.coverTopIcon} alt="" src="../cover-top@2x.png" />
      <h1 className={styles.detailsAboutInternshipProgr}>
        Details About Internship Program
      </h1>
      <h1
        className={styles.asPerTheRegulationsFromVa}
      >{`As per the regulations from various universities, we deliver you various levels of internship training and development. The internship duration may be from 4 -8 weeks. We provide solutions to the students that they can upgrade their knowledge and apply, converting it into project development. We have proposed our internship program keeping the focus on the present demand of industry standards so that we can make ready our students to fill the gap between industry and academics. Value-added courses to enhance the skills which help them to build a strong career in the field of computer science.  `}</h1>
      <div className={styles.weProvideInternshipOn}>
        We provide Internship on:
      </div>
      <div className={styles.machineLearningArtificialIn}>
        <p className={styles.machineLearningP}>Machine learning</p>
        <p className={styles.machineLearningP}>&nbsp;</p>
        <p className={styles.machineLearningP}>Artificial Intelligence</p>
        <p className={styles.machineLearningP}>&nbsp;</p>
        <p className={styles.machineLearningP}>Deep learning</p>
        <p className={styles.machineLearningP}>&nbsp;</p>
        <p className={styles.machineLearningP}>Data Science</p>
        <p className={styles.machineLearningP}>&nbsp;</p>
        <p className={styles.machineLearningP}>Python Programming</p>
        <p className={styles.machineLearningP}>&nbsp;</p>
        <p className={styles.javaProgrammingAnd}>
          Java programming and many more.
        </p>
      </div>
      <img className={styles.imageIcon} alt="" src="../image1@2x.png" />
    </div>
  );
};

export default InternshipProgram;
