import React from 'react'

export default function Welcome ({ onNext }) {
  return (
    <div className="widget-wrapper">
      <h1 className="text-center">¿Aún no conoces el motor de tu vida?</h1>
      <div className="text-center margin-bottom-1">Tenemos una motocicleta ideal para ti</div>
      <div className="progress-steps margin-bottom-1">
        <div className="progress-step-icon"><img src="images/S1.png" height={32} alt="" /></div>
        <div className="progress-step-icon"><img src="images/S2.png" height={32} alt="" /></div>
        <div className="progress-step-icon"><img src="images/S3.png" height={32} alt="" /></div>
      </div>
      <div className="bar-wrapper margin-bottom-1">
        <img src="images/PBar.png" srcSet="images/PBar.png 500w, images/PBar.png 800w, images/PBar.png 888w" sizes="(max-width: 479px) 75vw, (max-width: 888px) 100vw, 888px" alt="" className="progress-bar margin-bottom-1" />
        <div className="progress-steps">
          <div>Contesta</div>
          <div>Compara</div>
          <div>Cotiza</div>
        </div>
      </div>
      <div className="text-center margin-bottom-1">Con 5 sencillas preguntas conocerás la moto de tus sueños.</div>
      <button className="cta" onClick={onNext}>Conocer el motor de mi vida</button>
    </div>
  )
}
