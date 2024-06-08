import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import { assets } from "@/assets";
const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx("main")}>
      <div className={cx("nav")}>
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className={cx("main-container")}>
        <div className={cx("greet")}>
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className={cx("cards")}>
          <div className={cx("card")}>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} />
          </div>
          <div className={cx("card")}>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className={cx("card")}>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} />
          </div>
          <div className={cx("card")}>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} />
          </div>
        </div>
        <div className={cx("main-bottom")}>
          <div className={cx("search-box")}>
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img src={assets.send_icon} />
            </div>
          </div>
          <p className={cx("bottom-info")}>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
