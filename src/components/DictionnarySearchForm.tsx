import React from 'react'

function DictionnarySearchForm({onSubmitFunction}) {
  return (
    <form onSubmit={onSubmitFunction}>
      <input type="text" placeholder="Write your word" className="input-word" />
      &nbsp;
      <input type="submit" value="Search" />
    </form>
  )
}

export default DictionnarySearchForm