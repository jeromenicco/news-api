import React, { useState, useEffect } from 'react'
import NewsList from './components/NewsList'
import Axios from 'axios'
import { GoSearch } from 'react-icons/go'

import './App.css'

function App() {
  const [dataResult, setDataResult] = useState([])
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = e => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const results = dataResult.filter(search => search.title.toLowerCase().includes(query))
    setSearchResults(results)
  }, [query])


  const API_KEY = 'c9b3d958841a4931a60b1e3f99bdd0c0'

  useEffect(() => {
    const getData = async () => {
      const response = await Axios.get(
        `https://newsapi.org/v2/everything?q=${query.length === 0 ? 'divers' : query}?page=1&apiKey=${API_KEY}`
      )
      console.log('DATA RESPONSE', response.data.articles)
      console.log(query)
      setDataResult(response.data.articles)
    }
    getData()
  }, [query])

  return (
    <div className="app">
      <div className='search-container'>
        <input
          placeholder='Search...'
          onChange={handleChange}
          value={query}
        />
        <GoSearch size='25px' />
      </div>
      <NewsList searchResults={searchResults} dataResult={dataResult} />
    </div>
  )
}

export default App
