import React, { useState } from 'react';

// Import components
import Clock from './components/clock';

function App() {
    const [boolean, setBoolean] = useState(false);

    return (
        <div className="App">
            <h1>By the Bell 🔔</h1>
            <p>{boolean ? '👎' : '👍'}</p>
            <button onClick={() => setBoolean(!boolean)}>
                Toggle
            </button>
            <Clock />
        </div>
    )
};

export default App;