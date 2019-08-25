import React from 'react'

export default function Intent ({ model: { model, realPrice, currentPrice }, offer: { payments, amount }, onNext }) {

  return (
    <div className="widget-wrapper">
      <h1 className="text-center">Estrena tu Italika en cómodos pagos</h1>
      <div className="text-center margin-bottom-1">¡Felicidades! Cuentas con un Crédito Pre-autorizado para estrenar tu nueva Italika</div>
      <div className="recommendations-wrapper">
        <div className="recommendation"><img src="images/1.png" height={64} alt="" />
          <div className="text-small">{model}</div>
          <div className="text-small">{currentPrice}</div>
          <div className="text-red text-small">{payments} Pagos quincenales de: {amount}</div>
        </div>
      </div>
      <div className="text-center margin-bottom-1">Déjanos tus datos para enviar el detalle de tu crédito a tu Whatsapp</div>
      <div className="w-form">
        <form id="email-form" name="email-form" data-name="Email Form" onSubmit={onNext}>
          <label htmlFor="name">Nombre</label>
          <input type="text" className="widget-input w-input" maxLength={256} name="name" data-name="name" id="name" required />
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" className="widget-input w-input" maxLength={256} name="phone" data-name="phone" id="phone" required />
          <input type="submit" value="Quiero mi crédito" data-wait="Please wait..." className="cta w-button" />
        </form>
      </div>
    </div>
  )
}
