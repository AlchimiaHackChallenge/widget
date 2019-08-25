import React from 'react'

export default function Thanks ({ model: { model, realPrice, currentPrice }, sID, onNext }) {

  return (
    <div className="widget-wrapper">
      <h1 className="text-center">Gracias por tú Interés</h1>
      <div className="text-center margin-bottom-1">A la brevedad un vendedor se pondrá en contacto para ayudarte a estrenar tu Italika FT 250 TS.</div>
      <div className="recommendations-wrapper">
        <div className="recommendation"><img src="images/1.png" height={64} alt="" />
          <div>FT 250 TS</div>
        </div>
      </div>
      <div className="text-center margin-bottom-1">Si no aguantas más y quieres conocer tu moto en persona, visita tu tienda Elektra más cercana y presenta el siguiente código para recibir una oferta especial.</div>
      <div className="text-center text-highlight">{sID}</div>
    </div>
  )
}
