import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <a href="https://github.com/bunt88" target="blank">
            <li className="">
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
    </div>
  );
}

export default Footer;
