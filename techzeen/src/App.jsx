import { useState } from 'react'
import './App.css'
// import GetInputFieldValue from './Components/GetInputFieldValue'
// import HideShowToggle from './Components/HideShowToggle'
// import FormHandling from './Components/FormHandling'
//  import ConditionalRendering from './Components/ConditionalRendering'
 import PassFuntionAsProps from './Components/PassFuntionAsProps'

function App() {
  const [count, setCount] = useState(0)
  function getData(){
    alert("Hello zfrom App.jsx")
  }
  return (
    <>
    <div>
      {/* <GetInputFieldValue/> */}
      {/* <HideShowToggle/> */}
      {/* <FormHandling/> */}
      {/* <ConditionalRendering/> */}
      <PassFuntionAsProps getData={getData}/>
  </div>
    </>
  )
}

export default App
