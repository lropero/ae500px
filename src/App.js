import React, { useReducer } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import Navigator from 'ae500px/src/Navigator'
import { Token } from 'ae500px/src/contexts'
import { theme } from 'ae500px/src/utils'

const reducer = (state, token) => token

const App = () => {
  const [token, dispatchToken] = useReducer(reducer, '')

  return (
    <ThemeProvider theme={theme}>
      <Token.Provider value={{ dispatchToken, token }}>
        <>
          <StatusBar barStyle='dark-content' />
          <Navigator />
        </>
      </Token.Provider>
    </ThemeProvider>
  )
}

export default App
