import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import './Searching.css'

export default function  Searching({searchItem}) {

    const [query, setQuery]= useState(''); //храним что вводим

    const InputChange = (e) => {
        setQuery(e.target.value);
        searchItem(e.target.value);
    }

return <>
 <div className="search">
      <input
        type="text"
        placeholder="Search by name movie..."
        value={query}
        onChange={InputChange}
      />
    </div>
</>

}

Searching.propTypes = {
 searchItem: PropTypes.func.isRequired,
  };