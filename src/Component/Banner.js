import React from 'react';
import Dougs from '../assets/dougs.svg'

function Banner() {
  return(
    <div id='Header'>
    {/* <a href='https://www.dougs.fr/' ><img src={Dougs} alt="Logo Dougs" style={{width: '101', height:'26'}}/></a> */}
    <img src={Dougs} alt="Logo Dougs" style={{width: '101', height:'26'}}/>
    <p>Simulateur de rémunération pour les assimilés salariés</p>
  </div>
  )
}

export default Banner