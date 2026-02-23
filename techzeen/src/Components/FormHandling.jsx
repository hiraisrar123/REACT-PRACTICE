import React from 'react'

const FormHandling = () => {
    function getFormData (e){
        e.preventDefault()
        const formData = new FormData(e.target)
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }
    }
  return (
    <div>
        <h1>Form Handling In React JS</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter your name" />
            <br /><br />
            <select>
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <br /><br />
            <input type="checkbox" id="terms" />
            <br /> <br />
            <button type='submit'>Submit</button>
        </form>
  </div>
  )
}

export default FormHandling