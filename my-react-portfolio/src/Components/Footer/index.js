import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <a href="#" target="blank">
            <li className="">
              <FaGithub />
            </li>
          </a>
          <a href="#" target="blank">
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
