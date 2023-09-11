import React from "react";
import styles from "./footer.module.css";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const notify = () => toast.success("Email copied to clipboard.");

function Footer() {
  function copyToClipboard() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("email").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    notify();
  }

  return (
    <div className={styles.container}>
      <div className={styles.firstCol}>
        <h3>PORTFOLIO</h3>
        <span>
          Cristian <text className={styles.primary}>Wenz.</text>
        </span>
        <span>Full Stack Developer.</span>
      </div>
      <div>
        <h3>RESUME</h3>
        <span>
          Write me to{" "}
          <span
            className={styles.emailCopy}
            id="email"
            onClick={() => copyToClipboard()}
          >
            <i>cdwenz@gmail.com</i>
          </span>
        </span>
        <Toaster />;
      </div>
      <div>
        <h3>SOCIAL MEDIA</h3>
        <div className={styles.iconsSocial}>
          <AiFillLinkedin />
          <FaXTwitter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
