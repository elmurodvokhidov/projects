import axios from "axios";
import React, { useEffect, useState } from "react";

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState({
        name: "",
    });

    // inputdan ma'lumot olish
    function inpFunc(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    };


    // API dan ma'lumot olish
    function refresh() {
        axios({
            method: "get",
            url: "https://oydina.pythonanywhere.com/uitc_app/courses-api/"
        })
            .then((foo) => {
                setInfo(foo.data);
                // console.log(foo.data);
            })
            .catch((err) => console.log(err.message))
    }

    useEffect(() => {
        refresh();
    }, []);

    // API ga ma'lumot qo'shish
    function add(e) {
        e.preventDefault();
        axios({
            method: "post",
            url: "https://oydina.pythonanywhere.com/uitc_app/courses-api/",
            data: input,
        })
            .then((a) => {
                console.log(a.data);
                refresh();
            })
            .catch((err) => console.log(err))
        setInput({ name: "" })
    }

    return (
        <ContextData.Provider value={{
            info,
            inpFunc,
            add,
            input
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunction;