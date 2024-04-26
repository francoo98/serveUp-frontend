export default function Header() {
    return (
        <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
                <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">ServeUp!</span>
                </a>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                </form>
            </div>
        </header>
    );
}