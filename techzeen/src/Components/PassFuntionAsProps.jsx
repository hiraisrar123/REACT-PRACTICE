import React from 'react'

const PassFuntionAsProps = (props) => {
  return (
    <div>
    <h1>Pass Function As A Props</h1>
    <button onClick={props.getData}>Click Me</button>
    </div>
  )
}

export default PassFuntionAsProps