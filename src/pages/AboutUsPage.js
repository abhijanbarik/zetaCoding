import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <img className={styles.groupIcon} alt="" src="../group-3@2x.png" />
      <img className={styles.groupIcon1} alt="" src="../group-4@2x.png" />
      <img className={styles.groupIcon2} alt="" src="../group-5@2x.png" />
      <img className={styles.groupIcon3} alt="" src="../group-6@2x.png" />
      <h1 className={styles.zetaCodingInnovativeSolution}>
        ZetaCoding Innovative Solutions is located in Bengaluru, Karnataka,
        India and we are a service-based company for software development and
        training. Zeta Coding has established itself as one of the leaders in
        providing quality software solutions and services across a wide-ranging
        type of technologies to numerous software applications. We develop our
        identifiable projects and applications by succeeding the standards of
        ISO and IEEE. We support students in their academics to learn and deploy
        the IEEE projects and train them with software technologies. Our
        professionals are well-qualified, experienced, and proficient to deliver
        a quality product on time. We provide end-to-end solutions such as
        Project Management, Analysis, Development, Deployment, and continuous
        support to the customer’s satisfaction. We trust in long-term
        relationships with our clients by providing the best superiority of
        services. Our team includes highly experienced engineers, Academicians,
        Programmers, and Business Development Managers. Our motto is to provide
        future technology solutions, training, and development skills, and
        enhance the productivity of upcoming generations.
      </h1>
      <b className={styles.aBOUTUS}>ABOUT US</b>
      <h1 className={styles.weAtZetaCodingInnovativeSo}>
        We at ZetaCoding Innovative Solutions focus on our mission and vision
        policies and make every student to aware and understand the competitive
        market scenery to optimize the way to learn and practice the future
        technologies, growth prospects and leaders for tomorrow in the era of
        the Digital Age.
      </h1>
      <b className={styles.mESSAGEB}>MESSAGE</b>
      <img className={styles.groupIcon4} alt="" src="../group-10@2x.png" />
      <img className={styles.groupIcon5} alt="" src="../group-626.svg" />
    </div>
  );
};

export default AboutUsPage;
