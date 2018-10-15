import React from 'react'
import axios from 'axios'
import {Grid, Header, Card} from 'semantic-ui-react'

class Characters extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
    .then( res => this.setState({ characters: res.data }) )
  }

  render() {
    return (
      null
    )
  }
}

export default Characters