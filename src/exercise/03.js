// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider value={{toggle, on}}>
      {children}
    </ToggleContext.Provider>
  )
}

const useToggle = () => {
  const context = React.useContext(ToggleContext)
  if (context === undefined) {
    throw new Error('Could not find context.')
  }
  return context
}

function ToggleOn({children}) {
  const {on} = useToggle()
  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggle()
  return on ? null : children
}

function ToggleButton({props}) {
  const {on, toggle} = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return <ToggleButton />
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
