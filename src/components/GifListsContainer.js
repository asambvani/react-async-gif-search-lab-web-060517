import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const URL = 'http://api.giphy.com/v1/gifs/search?q='
const KEY = '&api_key=dc6zaTOxFJmzC'

class GifListsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      gifs: [],
      query: null
    }
  }

  updateSearch(event){
    console.log(event.target.value);
    this.setState({
      query: event.target.value
    }, this.getUrl
    )
  }
  componentWillMount(){
    this.getUrl()
  }

  getUrl(){
    fetch(URL + this.state.query + KEY)
      .then(response => response.json())
      .then(data =>
        this.setState({
          gifs: data.data.slice(0,3)
        })
      )
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <GifSearch updateSearch={this.updateSearch.bind(this)}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListsContainer
