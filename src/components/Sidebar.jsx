import '../styles/components/sidebar.sass'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

function Sidebar() {
  const perfil = require("../imgs/perfil.jpeg")

  return (
    <aside id="sidebar" >
      <img src={perfil}></img>
      <p className='title'>Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <button className='btn'>Download Currículo</button>
    </aside>
  )
}

export default Sidebar