import React, { Component } from 'react'
import './App.css'
import Storage from './services/storage'
import FormInput from './components/form-input'
import History from './components/history'

class App extends Component {
  constructor () {
    super()
    this.storage = new Storage()
    this.state = {
      well: '',
      wrong: '',
      improve: '',
      conversations: this.storage.getCollection('conversations')
    }
  }
  clearFields () {
    this.setState({
      well: '',
      wrong: '',
      improve: ''
    })
  }
  getConversationsFromState () {
    return {
      well: this.state.well,
      wrong: this.state.wrong,
      improve: this.state.improve
    }
  }
  change (id, e) {
    let change = {}
    change[id] = e.target.value
    this.setState(change)
  }
  saveConversation () {
    this.storage.appendCollection('conversations', {time: new Date().getTime(), conversation: this.getConversationsFromState()})
    this.clearFields()
    this.setState({conversations: this.storage.getCollection('conversations')})
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Conversation</h1>
        </header>
        <div className='left'>
          <FormInput id='well' text='What went well during the sprint cycle?' value={this.state.well} onChange={this.change.bind(this)} />
          <FormInput id='wrong' text='What went wrong during the sprint cycle?' value={this.state.wrong} onChange={this.change.bind(this)} />
          <FormInput id='improve' text='What could we do differently to improve?' value={this.state.improve} onChange={this.change.bind(this)} />
          <button onClick={this.saveConversation.bind(this)}>Save</button>
        </div>
        <div className='right'>
          <History history={this.state.conversations} />
        </div>
      </div>
    )
  }
}

export default App
