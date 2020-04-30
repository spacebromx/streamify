import React, { useState } from 'react'
import './_Search.scss'

const Search = () => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return <div className="search">
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={handleChange}
      />
      <span className="search__icon">
        <i className="fas fa-search search__image" />
      </span>
    </div>
  </div>
}

export default Search
