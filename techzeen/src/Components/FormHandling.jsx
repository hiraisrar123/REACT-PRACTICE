// import React, {useState} from 'react'

// const FormHandling = () => {
//     const [name, setName] = useState("");
//     const [option, setOption] = useState("");
//     const [agree, setAgree] = useState(false);
//     function getFormData (e){
//         e.preventDefault()
//             console.log(name, option, agree)
//         }
    
//   return (
//     <div>
//         <h1>Form Handling In React JS</h1>
//         <form onSubmit={getFormData}>
//             <input type="text" placeholder="Enter your name" onChange={(e) => setName (e.target.value)}/>
//             <br /><br />
//             <select onChange={(e) => setOption(e.target.value)}>
//                 <option>Select an option</option>
//                 <option>Option 1</option>
//                 <option>Option 2</option>
//                 <option>Option 3</option>
//             </select>
//             <br /><br />
//             <input type="checkbox" id="terms" onChange={(e) => setAgree(e.target.checked)}/>
//             <label htmlFor="terms">I agree to the terms and conditions</label>
//             <br /> <br />
//             <button type='submit'>Submit</button>
//         </form>
//   </div>
//   )
// }

// export default FormHandling