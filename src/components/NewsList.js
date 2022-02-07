import React, { useState, useEffect } from 'react'

import NewsItem from './NewsItem'

function NewsList({ searchResults, dataResult }) {
    return (
        <div>
            {
                searchResults.length === 0
                ?
                dataResult.map((data, index) => <NewsItem data={data} key={index} /> ) 
                :  
                searchResults.map((data, index) => <NewsItem data={data} key={index} /> )   
            }
        </div>
    )
}

export default NewsList
