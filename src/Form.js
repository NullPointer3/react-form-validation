import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail'

const Form = () => {
  const [inputFields, setInputFields] = useState({
    name: '',
    email: ''
  })
  const [people, setPeople] = useState([])
  const [fieldErrors, setFieldErrors] = useState({})

  const onFormSubmit = evt => {
    const ppl = [...people, inputFields]
    setPeople(ppl)
    setInputFields({
      name: '',
      email: ''
    })
    evt.preventDefault()
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    setInputFields(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = person => {
    const errors = {}
    if(!person.name) errors.name = 'Name Required'
    if(!person.email) errors.email = "Email Required"
    if(person.email && !isEmail(person.email)) errors.email = 'Invalid Email'
    return errors
  }
  return (
   <main>
    <form 
      action="#"
      onSubmit={onFormSubmit}
    >
      <div>
        <input
          name='name'
          placeholder='Name'
          value={inputFields.name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <input
          name='email'
          placeholder='Email'
          value={inputFields.email}
          onChange={onInputChange}
        />
      </div>
      <input type="submit"  />
    </form>

    <div>
      <h1>People</h1>
      <ul>
        { people.map((person, i) => (
          <li key={i}>
            {person.name} ({person.email})
          </li>
        ))}
      </ul>
    </div>
   </main>
  )
}

export default Form