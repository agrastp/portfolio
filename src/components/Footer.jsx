import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Pamela Agrast©</h2>
      <div>
        <ul>
          <a href="https://github.com/agrastp" target='_blank'>
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/pamela-agrast-23b48a50/"target='_blank' >
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://stackoverflow.com/users/21898858/pamela" target='_blank' >
            <li className="logo">
              <FaStackOverflow />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;