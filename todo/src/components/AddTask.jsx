import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text) {
      alert('Textee oruulna uu')
    }else {
      onAdd(text)
    }
    setText('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Add Task</label>
        <input type="text" placeholder='Add task...' value={text} onChange={(e) => {setText(e.target.value)}}/>
      </div>
      <input type="submit" value='Add' className='btn-block btn' />
    </form>
  )
}

export default AddTask
