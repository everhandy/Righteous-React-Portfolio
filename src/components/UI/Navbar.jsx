export default function Header({ links }) {
    return (
        <header className="navbar navbar-expand-lg navbar-light text-white bg-secondary">
            <div className="container-fluid">
                <div className="col-md-6">
                    <h1>Everett Handy</h1>
                </div>
                <div className="col-md-4">
                <nav className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link, index) => (
                            <li key={index} className="nav-item mx-2">
                            {link}
                            </li>
                        ))}
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    );
  }