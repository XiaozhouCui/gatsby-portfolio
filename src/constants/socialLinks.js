import React from "react"
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaHome,
  FaDocker,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/xiaozhou-cui-9744a535/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/XiaozhouCui",
  },
  {
    id: 3,
    icon: <FaDocker className="social-icon"></FaDocker>,
    url: "https://hub.docker.com/u/xiaozhoucui",
  },
  {
    id: 4,
    icon: <FaHome className="social-icon"></FaHome>,
    url: "https://www.joesdemosite.com/",
  },
  {
    id: 5,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://facebook.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a target="_blank" rel="noreferrer" href={link.url} className="social-link">
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
