export default function Login() {
    return (
        <>
        <div className="container">
            <form>

                <div data-mdb-input-init="" className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">
                        Username
                    </label>
                </div>

                <div data-mdb-input-init="" className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">
                        Password
                    </label>
                </div>

                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-primary btn-block mb-4">
                Log in
                </button>
            </form>
        </div>
        </>
    )
}