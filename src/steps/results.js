import React from 'react'

export default function Results ({ recommendations, onNext, sID, onRequestQuote }) {
  const [r1, r2] = recommendations

  return (
    <div className="widget-wrapper">
      <h1 className="text-center">Te presentamos<br />tu motor ideal</h1>
      <div className="text-center margin-bottom-1">Encontramos 2 opciones para ti</div>
      <div className="recommendations-wrapper">
        <div className="recommendation"><img src="images/1.png" height={64} alt="" />
          <div className="text-small">{r1.model}</div>
          <div className="text-strike text-small">De: $36,109.64</div>
          <div className="text-red text-small">A: $30,999.00</div>
          <button className="cta cta-green w-button" onClick={() => onRequestQuote(r1)}>Cotizar {r1.model}</button>
        </div>
        <div className="recommendation"><img src="images/1.png" height={64} alt="" />
          <div className="text-small">{r2.model}</div>
          <div className="text-strike text-small">De: $36,109.64</div>
          <div className="text-red text-small">A: $30,999.00</div>
          <button className="cta cta-green w-button" onClick={() => onRequestQuote(r2)}>Cotizar {r2.model}</button>
        </div>
      </div>
      <div className="features-wrapper margin-bottom-1">
        <div className="features-list features-list-first">
          <div className="feature text-micro">Hasta 8 hrs. continuas.<br />Uso ordinario</div>
          <div className="feature text-micro">110 km/h.<br />Velocidad máxima</div>
          <div className="feature text-micro">15 L<br />Capacidad de<br />combustible</div>
        </div>
        <div className="features-list">
          <div className="feature text-micro">Hasta 8 hrs. continuas.<br />Uso ordinario</div>
          <div className="feature text-micro">110 km/h.<br />Velocidad máxima</div>
          <div className="feature text-micro">15 L<br />Capacidad de<br />combustible</div>
        </div>
      </div>
      <div className="text-center margin-bottom-1">Súbete a tu Italika en la sucursal Elektra de tu preferencia y muestra el siguiente código al vendedor para recibir una oferta especial.</div>
      <div className="text-center text-highlight">{ sID }</div>
    </div>
  )
}
