import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaDocker,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/XiaozhouCui",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/xiaozhou-cui-9744a535/",
  },
  {
    id: 3,
    icon: <FaDocker className="social-icon"></FaDocker>,
    url: "https://hub.docker.com/u/xiaozhoucui",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a target="_blank" href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
