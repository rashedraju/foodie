import React from 'react';
import Search from '../Searchh/Search';
const header = () => (
    <header className="header p-sm-5">
        <div className="container">
            <h1 className="py-4 text-white text-center display-md">It's the food you love, delivered</h1>
            <Search />
        </div>
    </header>
);

export default header;