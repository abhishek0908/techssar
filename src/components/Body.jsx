// ComingSoon.js

import React from 'react';

const ComingSoon = () => {
    return (
        <section className="container mx-auto py-10">
            <img src="image.jpg" alt="" className="image" />
            <header className="text-center text-4xl font-bold mb-4">Tech-SSAR</header>
            <section className="container mx-auto max-w-lg bg-gray-100 rounded-lg p-6">
                <header className="text-xl font-semibold mb-4">Coming Soon Page</header>
                <p className="text-gray-700 mb-4">
                    Our website is under construction. We're working hard to improve our website and we'll be ready to launch soon.
                </p>
                <div className="email-content">
                    <p className="text-gray-700 mb-2">Subscribe now to get the latest updates!</p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded-r-md focus:outline-none focus:ring focus:border-blue-500"
                            aria-label="Notify Me"
                        >
                            Notify Me
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ComingSoon;
