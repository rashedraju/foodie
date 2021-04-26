import React from 'react';

const footer = () => {
    const footerNavItem = [
        'About Us',
        'Career',
        'Blog',
        'Press',
        'Contact',
        'Foodie for Business',
        'Term & conditions',
        'Privacy Policy',
    ].map((el) => (
        <div className="col-6 col-md-4 p-2" key={el.replace(' ', '')}>
            <li>
                <a href="/" className="text-white">
                    {el}
                </a>
            </li>
        </div>
    ));

    const year = new Date().getFullYear();
    return (
        <footer className="bg-black py-3">
            <div className="container">
                <ul className="row list-unstyled">{footerNavItem}</ul>
                <p className="text-center text-white">
                    &copy;copyright <span>{year}</span>
                </p>
            </div>
        </footer>
    );
};
export default footer;
