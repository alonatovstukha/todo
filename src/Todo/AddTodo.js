import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo ( {onCreate} ) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form className="add-form" style={{marginBottom: "1rem"}} onSubmit={submitHandler}>
      <input className="add-input" value={value} onChange={event => setValue(event.target.value)}></input>
      <button className="add-button" type='submit'>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo