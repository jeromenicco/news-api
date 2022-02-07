import React, { useState } from 'react'

function Search({ dataResult }) {
    const [ query, setQuery ] = useState('')
    const [ searchResult, setSearchResult ] = useState([])

    const handleSearch = (e) => {
        setQuery(e.target.value)
        dataResult.filter(post => {
            if (query === '') {
              return post
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                setSearchResult(post)
                console.log(query, searchResult)
            }
          })
    }

    return (
        <div>
            <input
                placeholder='Search...'
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search
