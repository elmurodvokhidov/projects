import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../slice/authslice';

function Navbar() {
    const { isLogged, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logoutFunction() {
        const conf = window.confirm("Do you want to logout?");
        if (conf) {
            localStorage.removeItem("token");
            dispatch(logoutUser());
            navigate("register");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" aria-label="Eleventh navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        {
                            isLogged ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page">{user.username.length > 5 ? user.username.slice(0, 8) + "..." : user.username}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to=""><img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={user.image} alt={user.username} /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger" onClick={logoutFunction}>Logout</button>
                                    </li>
                                </>
                                : <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="login">Login</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar