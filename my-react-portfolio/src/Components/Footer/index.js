import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="align-bottom"
      style={{
        height: 100,
        textAlign: "center",
        background: "#003452",
      }}
    >
      <ul className="" style={{ listStyle: "none", fontSize: "50px" }}>
        <a href="https://www.github.com/bunt88" target="blank">
          <li>
            <FaGithub />
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
          target="blank"
        >
          <li>
            <FaLinkedin />
          </li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
