import { useState } from 'react'
import './App.css'
// import GetInputFieldValue from './Components/GetInputFieldValue'
// import HideShowToggle from './Components/HideShowToggle'
// import FormHandling from './Components/FormHandling'
 import ConditionalRendering from './Components/ConditionalRendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <GetInputFieldValue/> */}
      {/* <HideShowToggle/> */}
      {/* <FormHandling/> */}
      <ConditionalRendering/>
  </div>
    </>
  )
}

export default App
