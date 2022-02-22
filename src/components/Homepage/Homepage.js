import React from 'react';
import Cardlist from '../Card/Cardlist';
import "./Homepage.css";

function Homepage({searchedValue,data}) {
    
    const filteredData=data.filter((item) => {
        return item.name.toLowerCase().includes(searchedValue.toLowerCase())
      })
    
    return (
        <div className='homepage'>
           <Cardlist filteredData={filteredData}/>
        </div>
    );
}

export default Homepage;
