import React, { useContext } from 'react';
import { ContextData } from '../context/Context';

function Home() {
    const { info } = useContext(ContextData);
    // console.log(info);

    return (
        <div>
            <h1>This is Home page</h1>
            {
                info.map((a, b) => (
                    <h3 key={b}>{a.name}</h3>
                ))
            }
        </div>
    );
}

export default Home;