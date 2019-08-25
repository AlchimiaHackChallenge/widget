import React from 'react'

export default function Survey ({ onNext }) {
  return (
    <div className="widget-wrapper">
      <h1 className="text-center">Cuéntanos</h1>
      <div className="w-form">
        <form id="email-form" name="email-form" data-name="Email Form" onSubmit={ onNext }>
          <label htmlFor="name">1. ¿Es tu primera moto?</label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="first" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node" className="w-form-label">Sí</span>
          </label>
          <label className="widget-radio margin-bottom-1 w-radio">
            <input type="radio" data-name="first" id="node" name="first" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">No</span>
          </label>
          <label htmlFor="email">2. ¿Para qué la vas a usar?</label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="use" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Trabajo</span>
          </label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="use" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Personal</span>
          </label>
          <label className="widget-radio margin-bottom-1 w-radio">
            <input type="radio" data-name="first" id="node" name="use" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Recreativo</span>
          </label>
          <label htmlFor="email">3. ¿Cuál es tu presupuesto?</label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="budget" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Hasta $15,000</span>
          </label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="budget" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Hasta $20,000</span>
          </label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="budget" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Hasta $25,000</span>
          </label>
          <label className="widget-radio margin-bottom-1 w-radio">
            <input type="radio" data-name="first" id="node" name="budget" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Más de $30,000</span>
          </label>
          <label htmlFor="email">4. ¿Cuántos kilómetros rodarás cada día?</label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="km" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Menos de 100 km</span>
          </label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="km" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Entre 100 y 200 km</span>
          </label>
          <label className="widget-radio w-radio">
            <input type="radio" data-name="first" id="node" name="km" defaultValue={1} className="w-radio-input" />
            <span htmlFor="node-2" className="w-form-label">Entre 200 y 300 km</span>
          </label>
          <input type="submit" value="Siguiente" data-wait="Please wait..." className="cta w-button" />
        </form>
  </div>
</div>
  )
}
