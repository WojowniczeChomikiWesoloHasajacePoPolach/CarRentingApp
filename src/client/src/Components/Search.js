import React from 'react';

class Search extends React.Component {
    render() {
        return(
        <form className='search-section'>
            <h3>THE BEST CHOICE</h3>
            <div className='search-details'>
                <label>Brand:</label><input type='text'/>
                <label>Model:</label><input type='text'/>
                <label>Motor:</label><input type='text'/>
            </div>
            <input className='button' type='submit' value='Search'/>
        </form>
    )}
}

export default Search;