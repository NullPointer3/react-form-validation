import React, { useState } from 'react'

const Form = () => {
  const [inputFields, setInputFields] = useState({ name: '', email: '' })
  const [people, setPeople] = useState([])

  const onFormSubmit = evt => {
    const peop = [ ...people, inputFields]
    setPeople(peop)
    setInputFields({name:'', email:''})
    evt.preventDefault()
  }
  const onInputChange = evt => {
    const fields = Object.assign({}, inputFields)
    fields[evt.target.name] = evt.target.value
    setInputFields(fields)
  }
  return (
    <div>
      <h1>Sign Up Sheet</h1>
      <form
        onSubmit={onFormSubmit}
      >
        <div>
          <input 
            type="text"
            name='name'
            placeholder='Name'
            value={inputFields.name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <input 
            type="text"
            name='email'
            placeholder='Email' 
            value={inputFields.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <input 
            type="submit" 
          />
        </div>
      </form>

      <div>
        <h2>people</h2>
        <ul>
          {people.map(({name,email}, i) => (
            <li key={i}>{name} ({email})</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Form