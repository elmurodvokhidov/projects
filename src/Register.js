import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInErr, signInStart, signInSuccess } from './authSlice';
import AuthService from './service/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { isLoading, loggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: '', email: '', password: '' });

    function getInputVal(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    async function handleRegister() {
        dispatch(signInStart());
        try {
            const res = await AuthService.register(user);
            dispatch(signInSuccess());
            navigate('/')
        } catch (error) {
            dispatch(signInErr());
        }
    };

    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
    }, [loggedIn, navigate]);


    return (
        <div>
            <form>
                <input onChange={(e) => getInputVal(e)} type="text" name="username" id="" />
                <input onChange={(e) => getInputVal(e)} type="text" name="email" id="" />
                <input onChange={(e) => getInputVal(e)} type="text" name="password" id="" />
                <button type='button' onClick={handleRegister}>{isLoading ? "loading..." : "register"}</button>
            </form>
        </div>
    )
}

export default Register