import React from 'react'

import NavBar from './NavBar'
import GifListsContainer from './GifListsContainer'

// the App component should render out the GifListContainer component

function App() {

  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      < GifListsContainer />
    </div>
  )
}

export default App
