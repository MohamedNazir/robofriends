import React from 'react';

const SearchBox = ({searchChange}) => {

    return(
        <div className="pa3 b---yellow bg-light-yellow dib ma2">
        <input type = "serach" placeholder = "Serach Robots" onChange = {searchChange}/>
        </div>
    );

}
export default SearchBox;