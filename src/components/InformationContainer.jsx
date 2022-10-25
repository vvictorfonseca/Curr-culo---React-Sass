import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationContainer.sass'

function InformationContainer() {
  return (
    <section id='information'>
      
      <div className='info-card'>
        <AiFillPhone id='phone-icon' />
        <div>
          <h3 className='h3'>Telefone</h3>
          <p>(24) 99964-2965</p>
        </div>
      </div>

      <div className='info-card'>
        <AiOutlineMail id='email-icon' />
        <div>
          <h3 className='h3'>E-mail</h3>
          <p>vvictor.h.fonseca@gmail.com</p>
        </div>
      </div>

      <div className='info-card'>
        <AiFillEnvironment id='e-icon' />
        <div>
          <h3 className='h3'>Localização</h3>
          <p>Rio de Janeiro - RJ</p>
        </div>
      </div>

    </section>
  )
}

export default InformationContainer