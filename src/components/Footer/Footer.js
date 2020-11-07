import React from 'react';

const footer = () => {
    let footerNavItem = ['About Us', 'Career', 'Blog', 'Press', 'Contact', 'Goodie from Business', 'Term & conditions', 'Privacy Policy'].map((el, i) => (
        <div className="col-6 col-md-4 p-2" key={i}>
            <li><a href="/" className="text-white">{el}</a></li>
        </div>
    ));

    const year = new Date().getFullYear();
    return (
        <footer className="bg-black py-3">
            <div className="container">
                <ul className="row list-unstyled">
                    {footerNavItem}
                </ul>
                <p className="text-center text-white">&copy;copyright <span>{year}</span></p>
            </div>
        </footer>
    );
}
export default footer;