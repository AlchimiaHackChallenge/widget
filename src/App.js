import React, { Component } from 'react'
import Welcome from './steps/welcome'
import Survey from './steps/survey'
import Results from './steps/results'
import Intent from './steps/quotation'
import Thanks from './steps/thanks'

const API = 'http://soriana.inboard.mx:8081/api'

class App extends Component {
  state = {
    page: 'welcome',
    recommendations: [],
    offer: {
      payments: 48,
      amount: '$799'
    },
    sID: '0000000'
  }

  init = () => {
    return this.setState({ page: 'survey' })
  }

  closeWidget = () => {
    return this.setState({
      isOpen: false
    })
  }

  track = e => {
    e.preventDefault()
    // TODO: Enviar datos
    const intent = {
      q1: e.target.first.value,
      q2: e.target.use.value,
      q3: e.target.budget.value,
      q4: e.target.km.value,
    }

    return fetch(`${API}/intent`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ widget: intent, status: 'NA', name: 'NA', city: 'NA', age: '99' })
    }).then(res => {
      return res.json().then(({ recommendations, s_id: sID }) => {
        this.setState({
          sID,
          page: 'results',
          recommendations: [
            recommendations.r1,
            recommendations.r2
          ]
        })
      })
    })
  }

  goToIntent = model => {

    return this.setState({
      page: 'intent',
      model
    })
  }

  finish = e => {
    e.preventDefault()
    const payload = {
      name: e.target.name.value,
      age: e.target.phone.value
    }
    return fetch(`${API}/intent/${this.state.sID}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(response => {
      return this.setState({
        page: 'thanks'
      })
    })
  }

  render () {
    const {
      state: { page, recommendations, model, offer, sID, isOpen },
      closeWidget, init, track, goToIntent, finish
    } = this

    if (!isOpen) {
      return (
        <div style={{ maxWidth: '320px', margin: '0 auto', position: 'relative', height: '100vh' }}>
          <div
            style={{
              cursor: 'pointer', background: '#123379', color: 'white', width: 164,
              height: 64, borderRadius: 32, position: 'absolute', right: 0,
              bottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            value="Italika Konnect"
            onClick={() => this.setState({ isOpen: !isOpen })}>
            <img src="images/ITALIKA-Konnect.png" height={20} alt="" style={{ marginBottom: 8 }} />
            <span class="text-small" style={{ color: 'white', lineHeight: 1 }}>Descubre tu moto ideal</span>
          </div>
        </div>
      )
    }

    switch (page) {
      case 'welcome':
        return (
          <div style={{ maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ width: 24, height: 24, textAlign: 'center', position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={closeWidget}>&times;</span>
            <Welcome onNext={init} />
          </div>
        )
        break;
      case 'survey':
        return (
          <div style={{ maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ width: 24, height: 24, textAlign: 'center', position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={closeWidget}>&times;</span>
            <Survey onNext={track} />
          </div>
        )
        break;
      case 'results':
        return (
          <div style={{ maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ width: 24, height: 24, textAlign: 'center', position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={closeWidget}>&times;</span>
            <Results recommendations={recommendations} onRequestQuote={goToIntent} sID={sID} />
          </div>
        )
        break;
      case 'intent':
        return (
          <div style={{ maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ width: 24, height: 24, textAlign: 'center', position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={closeWidget}>&times;</span>
            <Intent model={model} offer={offer} onNext={finish} />
          </div>
        )
        break;
      case 'thanks':
        return (
          <div style={{ maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ width: 24, height: 24, textAlign: 'center', position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={closeWidget}>&times;</span>
            <Thanks model={model} sID={sID} />
          </div>
        )
        break;
      default:
        return (
          <div style={{ maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ width: 24, height: 24, textAlign: 'center', position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={closeWidget}>&times;</span>
            <h1>NADA</h1>
          </div>
        )
    }
  }

}

export default App;
