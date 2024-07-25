import React, { useEffect, useState } from 'react'

function Search(props) {
    const [searchText,setSearchText]=useState("");

    const handleChange = (event) => {
     setSearchText(event.target.value);
      
    }

    useEffect(() => {
      props.onSearch(searchText);
    }, [searchText])

      return (
    <div style={{textAlign: "center"}}>
        <input type="text" placeholder='Search Countries' value={searchText} onChange={handleChange} />
    </div>
  )
}

export default Search