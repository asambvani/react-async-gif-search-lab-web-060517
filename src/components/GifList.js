import React from 'react'

class GifList extends React.Component {
  render(){
    console.log(this.props.gifs)
    const gifs = this.props.gifs.map((gif,index) => <li key={index}><img src={`${gif.embed_url}`} alt="Missing"/></li>)
    return(
      <ul>
        {gifs}
      </ul>
    )
  }
}

export default GifList
