// App.js

import React from 'react';
import Header from './components/Header';

import Body from './components/Body';
import './index.css'

function App() {
    return (
        <div>
            <Header />
            <Body/>
            {/* Other content */}
        </div>
    );
}

export default App;
