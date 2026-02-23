import { useState } from 'react'
import './App.css'
// import GetInputFieldValue from './Components/GetInputFieldValue'
// import HideShowToggle from './Components/HideShowToggle'
import FormHandling from './Components/FormHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <GetInputFieldValue/> */}
      {/* <HideShowToggle/> */}
      <FormHandling/>
  </div>
    </>
  )
}

export default App
