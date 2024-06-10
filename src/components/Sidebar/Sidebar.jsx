import { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { assets } from "@/assets";
import { Context } from "@/context/Context";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { setRecentPrompt, prevPrompt, onSent, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={cx("sidebar")}>
      <div className={cx("top")}>
        <img
          onClick={() => setExtended((prev) => !prev)}
          className={cx("menu")}
          src={assets.menu_icon}
        />
        <div onClick={() => newChat()} className={cx("new-chat")}>
          <img src={assets.plus_icon} />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className={cx("recent")}>
            <p className={cx("recent-title")}>Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={cx("recent-entry")}
                    onClick={() => loadPrompt(item)}
                  >
                    <img src={assets.message_icon} />
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                </>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className={cx("bottom")}>
        <div className={cx("bottom-item", "recent-entry")}>
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className={cx("bottom-item ", "recent-entry")}>
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className={cx("bottom-item", "recent-entry")}>
          <img src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
