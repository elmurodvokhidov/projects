import React, { useContext } from 'react';
import { ContextData } from '../context/Context';

function Admin() {
    const { inpFunc, add, input } = useContext(ContextData);

    return (
        <div>
            <form action="#">
                <div className="inputs">
                    <label htmlFor="name">Kurs nomi</label>
                    <input onChange={(e) => inpFunc(e)} value={input.name} type="text" name="name" id="name" />
                </div>


                {/* <div className="inputs">
                    <label htmlFor="description">Kurs haqida</label>
                    <input onInput={(e) => inpFunc(e)} type="text" name="description" id="description" />
                </div> */}

                <button onClick={(e) => add(e)}>add</button>
            </form>
        </div>
    );
}

export default Admin;