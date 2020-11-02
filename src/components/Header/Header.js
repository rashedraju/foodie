import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
const header = () => (
    <header className="header p-sm-5">
        <div className="container">
            <h1 className="py-4 text-white text-center display-md">It's the food you love, delivered.</h1>
            <SearchBar />
        </div>
    </header>
);

export default header;