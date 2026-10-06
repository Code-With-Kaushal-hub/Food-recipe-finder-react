
import { useState } from "react";

function Navbar({ mySearch, activate }) {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        activate(prev => prev + 1);

        closeMenu();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg recipe-navbar">

                <div className="container">

                    {/* Logo */}
                    <a
                        className="navbar-brand fw-bold"
                        href="#home"
                    >
                        🍳 Recipe Finder
                    </a>


                    {/* Mobile Menu Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span className="menu-icon">
                            {menuOpen ? "×" : "☰"}
                        </span>
                    </button>


                    {/* Navbar Menu */}
                    <div
                        className={
                            menuOpen
                                ? "navbar-collapse show"
                                : "navbar-collapse"
                        }
                        id="navbarNav"
                    >

                        {/* Menu Links */}
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#home"
                                    onClick={closeMenu}
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#recipes"
                                    onClick={closeMenu}
                                >
                                    Recipes
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#categories"
                                    onClick={closeMenu}
                                >
                                    Categories
                                </a>
                            </li>

                        </ul>


                        {/* Search Form */}
                        <form
                            className="d-flex ms-3"
                            role="search"
                            onSubmit={handleSubmit}
                        >

                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search recipe..."
                                aria-label="Search"
                                onChange={(e) =>
                                    mySearch(e.target.value)
                                }
                            />

                            <button
                                className="btn recipe-search-btn"
                                type="submit"
                            >
                                Search
                            </button>

                        </form>

                    </div>

                </div>

            </nav>
        </>
    );
}

export default Navbar;

