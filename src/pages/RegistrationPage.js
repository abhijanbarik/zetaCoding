import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPageDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.torus2Div}>
          <img className={styles.saly23Icon} alt="" src="../saly23@2x.png" />
        </div>
        <div className={styles.formDiv}>
          <div className={styles.titleDiv}>
            <div className={styles.welcomeDiv}>Welcome</div>
          </div>
          <input
            className={styles.emailInput}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.passwordInput}
            type="text"
            placeholder="Username"
          />
          <input
            className={styles.emailInput1}
            type="text"
            placeholder="College Name"
          />
          <div className={styles.frameDiv} />
          <button className={styles.frameButton}>
            <div className={styles.buttonDiv}>
              <div className={styles.buttonDiv1}>
                <div className={styles.contentDiv}>
                  <img
                    className={styles.warningIcon}
                    alt=""
                    src="../warning.svg"
                  />
                  <div className={styles.labelDiv}>APPLY</div>
                  <div className={styles.bageDiv}>
                    <img
                      className={styles.arrowTopIcon}
                      alt=""
                      src="../arrow-top.svg"
                    />
                    <div className={styles.labelBodyDiv}>
                      <img
                        className={styles.arrowTopIcon}
                        alt=""
                        src="../arrow-left.svg"
                      />
                      <div className={styles.labelTextIcon}>
                        <img
                          className={styles.warningIcon1}
                          alt=""
                          src="../warning1.svg"
                        />
                        <div className={styles.textspacerDiv}>
                          <div className={styles.labelDiv1}>44</div>
                          <div className={styles.spacer2pxDiv} />
                        </div>
                      </div>
                      <img
                        className={styles.arrowTopIcon}
                        alt=""
                        src="../arrow-right.svg"
                      />
                    </div>
                    <img
                      className={styles.arrowTopIcon}
                      alt=""
                      src="../arrow-bot.svg"
                    />
                  </div>
                  <img
                    className={styles.warningIcon}
                    alt=""
                    src="../warning.svg"
                  />
                </div>
              </div>
            </div>
          </button>
          <div className={styles.backColorDiv} />
          <img className={styles.backIcon} alt="" src="../back.svg" />
          <div className={styles.artDiv}>
            <img className={styles.groupIcon} alt="" src="../group.svg" />
          </div>
          <div className={styles.welcomeAboardMyFriendJust}>
            <p className={styles.welcomeAboardMyFriend}>
              <span className={styles.welcomeAboardMy}>
                Welcome aboard my friend
              </span>
            </p>
            <p className={styles.justACoupleOfClicksAndWe}>
              <span>just a couple of clicks and we are done</span>
            </p>
          </div>
          <input
            className={styles.emailInput2}
            type="text"
            placeholder="Branch"
          />
          <input
            className={styles.emailInput3}
            type="text"
            placeholder="Semester"
          />
          <Stack className={styles.emailStack}>
            <Menu>
              <MenuButton
                w="358px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="teal"
              >
                Which course you want to enroll
              </MenuButton>
              <MenuList>
                <MenuItem value="Internship Program">
                  Internship Program
                </MenuItem>
                <MenuItem value="IEEE Projects">IEEE Projects</MenuItem>
                <MenuItem value="Software Development">
                  Software Development
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </div>
        <img className={styles.torusIcon} alt="" src="../torus@2x.png" />
      </div>
      <div className={styles.zETACODINGDiv}>ZETA CODING</div>
    </div>
  );
};

export default RegistrationPage;
