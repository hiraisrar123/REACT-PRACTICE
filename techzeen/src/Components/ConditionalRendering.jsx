// import {useState} from 'react'

// const ConditionalRendering = () => {
//   const [vote, setVote] = useState(false);

//   if (vote) {
//   return (
//     <div>
//       <h1>You Can Vote</h1>
//     </div>
//   )
// } else{
//     return (
//     <div>
//       <h1>You Cannot Vote</h1>
//     </div>)
// }

// return(
//   <div>
//     <button onClick={() => setVote(true)}>Allow Vote</button>
//     <button onClick={() => setVote(false)}>Deny Vote</button>

//     {vote && <h1>You Can Vote</h1>}

//     {age >18 ? <h2> Your age is greater than 18</h2>: <h2> Your age is less than 18</h2>}
//   </div>
// )}
// export default ConditionalRendering