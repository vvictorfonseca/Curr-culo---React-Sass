import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialNetworks.sass'

function SocialNetworks() {

  const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/victorhfonseca/"},
    { name: "github", icon: <FaGithub />, link: "https://github.com/vvictorfonseca"},
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/vvictorfonseca/?next=%2F"}
  ]

  return (
    <div id="social-box">
      {
        socialNetworks.map((networks) => {
          return (
            <a href={networks.link} className='social-btn' id={networks.name} key={networks.name}>
              {networks.icon}
            </a>
          )
        })
      }
    </div>
  )
}

export default SocialNetworks