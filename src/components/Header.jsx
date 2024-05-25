// Header.js

import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold">Techssar</div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="hover:text-orange-500">About</a></li>
                        <li><a href="#contact" className="hover:text-orange-500">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
