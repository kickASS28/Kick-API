import React from "react";
import classes from "./Footer.module.css";
import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul className={classes.socials}>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=919156123997"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} />
            <span>Whatapp</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/Ashwamedh28" target="_blank" rel="noreferrer">
            <FaTelegram size={20} />
            <span>Telegram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ashwamedh-bahod-157a061a9"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:ashwamedhpb@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaRegEnvelope size={20} />
            <span>Gmail</span>
          </a>
        </li>
      </ul>
      <p className={classes.copyright}>
        Copyright ©{new Date().getFullYear()} Kick-Development, IND-MH, KOP ®{" "}
      </p>
    </div>
  );
};

export default Footer;
