function Add() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="w-25">
                <h1 className="h3 mb-5 fw-normal text-center">Add a new user</h1>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Major</label>
                </div>

                <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add