import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ZetaCodingMainWebsite.module.css";

const ZetaCodingMainWebsite = () => {
  const navigate = useNavigate();

  const onZETACODINGButtonClick = useCallback(() => {
    navigate("/hero-section");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onCOURSESButtonClick = useCallback(() => {
    navigate("/course-details");
  }, [navigate]);

  const onGALLERYButtonClick = useCallback(() => {
    navigate("/details-page");
  }, [navigate]);

  const onUPCOMINGCLASSESButtonClick = useCallback(() => {
    navigate("/details-page");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/internship-program");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/ieee-project");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/software-development");
  }, [navigate]);

  const onCoursesButtonClick = useCallback(() => {
    navigate("/course-details");
  }, [navigate]);

  const onAboutUsButtonClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  return (
    <div className={styles.zetaCodingMainWebsite}>
      <div className={styles.navigationBarDiv}>
        <div className={styles.frameDiv}>
          <button
            className={styles.zETACODINGButton}
            onClick={onZETACODINGButtonClick}
          >
            ZETA CODING
          </button>
          <div className={styles.groupDiv}>
            <button className={styles.frameButton} onClick={onFrameButtonClick}>
              <b className={styles.lOGINB}>LOG IN</b>
            </button>
            <button
              className={styles.cOURSESButton}
              onClick={onCOURSESButtonClick}
            >
              COURSES
            </button>
            <button
              className={styles.gALLERYButton}
              onClick={onGALLERYButtonClick}
            >
              GALLERY
            </button>
            <button
              className={styles.uPCOMINGCLASSESButton}
              onClick={onUPCOMINGCLASSESButtonClick}
            >
              UPCOMING CLASSES
            </button>
          </div>
        </div>
      </div>
      <div className={styles.signUpSectionDiv}>
        <img className={styles.imageIcon} alt="" src="../image@2x.png" />
        <div className={styles.frameDiv1}>
          <b className={styles.eXPLOREOPPORTUNITIESFORSTUD}>
            EXPLORE OPPORTUNITIES FOR STUDENTS
          </b>
          <div className={styles.learnIndustryRelevantSkills}>
            Learn industry relevant skills with top tech Professionals
          </div>
          <div className={styles.groupDiv1}>
            <button
              className={styles.signUpButton}
              onClick={onSignUpButtonClick}
            >
              <button className={styles.rectangleButton} />
              <div className={styles.signUpDiv}>Sign Up</div>
            </button>
            <input
              className={styles.frameInput}
              type="email"
              placeholder="Your Email Address "
            />
          </div>
          <div className={styles.groupDiv2}>
            <button className={styles.bySharingYourEmailYourAg}>
              <span
                className={styles.bySharingYour}
              >{`By Sharing your email, your agree to our `}</span>
              <span
                className={styles.tERMSCONDITIONS}
              >{`TERMS & CONDITIONS`}</span>
            </button>
            <div className={styles.groupDiv3}>
              <div className={styles.keepMeUpToDateOnClassEv}>
                Keep me up to date on class events and new release
              </div>
              <input className={styles.checkCircleInput} type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.courseDetailsDiv}>
        <div className={styles.frameDiv2}>
          <b className={styles.eXPLOREOPPORTUNITIESFORSTUD}>Our Courses</b>
          <div className={styles.experienceTheLive11Class}>
            Experience the live 1:1 class for students and boost your knowledge
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <img
            className={styles.calligraphyCourseIcon}
            alt=""
            src="../calligraphy-course@2x.png"
          />
          <img
            className={styles.calligraphyCourseIcon}
            alt=""
            src="../painting-course@2x.png"
          />
          <img
            className={styles.calligraphyCourseIcon}
            alt=""
            src="../calligtaphy-course@2x.png"
          />
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.eXPLOREOPPORTUNITIESFORSTUD}>
            Internship Program
          </div>
          <div className={styles.eXPLOREOPPORTUNITIESFORSTUD}>
            IEEE Projects
          </div>
          <div className={styles.eXPLOREOPPORTUNITIESFORSTUD}>
            Software Development
          </div>
        </div>
        <div className={styles.groupDiv4}>
          <button className={styles.frameButton1} onClick={onFrameButton1Click}>
            <b className={styles.bOOK}>BOOK</b>
          </button>
          <button className={styles.frameButton2} onClick={onFrameButton2Click}>
            <b className={styles.bOOK}>BOOK</b>
          </button>
          <button className={styles.frameButton3} onClick={onFrameButton3Click}>
            <b className={styles.bOOK}>BOOK</b>
          </button>
        </div>
      </div>
      <div className={styles.detailsPageDiv}>
        <div className={styles.frameDiv5}>
          <div
            className={styles.exquisiteTechLearningLikeN}
          >{`Exquisite tech learning like never before `}</div>
          <b className={styles.upcomingClassesB}>Upcoming classes</b>
        </div>
        <div className={styles.frameDiv6}>
          <div className={styles.frameDiv6}>
            <div className={styles.groupDiv5}>
              <div className={styles.whyDetails1}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.rectangleDiv1} />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv7}>
          <b className={styles.eXPLOREOPPORTUNITIESFORSTUD}>{`Gallery `}</b>
        </div>
        <div className={styles.frameDiv6}>
          <div className={styles.groupDiv6}>
            <div className={styles.whyDetails3}>
              <div className={styles.rectangleDiv2} />
            </div>
            <div className={styles.whyDetails4}>
              <div className={styles.rectangleDiv3} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <img className={styles.vectorsIcon} alt="" src="../vectors.svg" />
        <div className={styles.exploreCourses}>
          <div className={styles.exploreDiv}>Explore</div>
          <button
            className={styles.coursesButton}
            onClick={onCoursesButtonClick}
          >
            Courses
          </button>
        </div>
        <div className={styles.socialMediaDiv}>
          <a className={styles.instagram}>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
            <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
          </a>
          <a className={styles.facebook}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
          </a>
          <a className={styles.twitterA}>
            <img className={styles.vectorIcon4} alt="" src="../vector4.svg" />
          </a>
          <div className={styles.followUsDiv}>
            <div className={styles.exploreDiv}>Follow us</div>
          </div>
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.exploreDiv}>Company</div>
          <button
            className={styles.aboutUsButton}
            onClick={onAboutUsButtonClick}
          >
            about us
          </button>
        </div>
        <div className={styles.copyright20082022Zetacod}>
          Copyright © 2008-2022, Zetacoding, Inc. "Zetacoding" and logo are
          registered trademarks of Zetacoding, Inc
        </div>
      </div>
    </div>
  );
};

export default ZetaCodingMainWebsite;
