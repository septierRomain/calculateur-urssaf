import React from 'react';
import Dougs from '../assets/dougs.svg'

function Banner() {
  return(
    <div id='Header'>
    <img src={Dougs} alt="Logo Dougs" style={{width: '101', height:'26'}}/>
    <p>Simulateur de rémunération pour les présidents de SASU</p>
  </div>
  )
}

export default Banner