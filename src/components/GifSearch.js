import React from 'react'

class GifSearch extends React.Component {
  render(){
    return(
      <div>
        Enter A Search Keyword:
        <input type="text" onChange={this.props.updateSearch}/>
      </div>
    )
  }
}

export default GifSearch
