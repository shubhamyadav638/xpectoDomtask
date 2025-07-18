import React from 'react';

function Header({ toggleSidebar }) {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center shadow-sm">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Logo and Sidebar Toggle */}
                <div className="d-flex align-items-center">
                    <a href="/" className="logo d-flex align-items-center text-decoration-none text-dark">
                        <span className="d-none d-lg-block fs-4 fw-bold">Xpecto</span>
                    </a>
                    <i
                        className="bi bi-list toggle-sidebar-btn ms-3 fs-3 cursor-pointer"
                        onClick={toggleSidebar}
                        role="button"
                        aria-label="Toggle Sidebar"
                    ></i>
                </div>

                {/* Search Bar */}
                <div className="search-bar d-none d-md-block">
                    <form className="search-form d-flex align-items-center" role="search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            title="Enter search keyword"
                        />
                        <button className="btn btn-outline-secondary ms-2" type="submit" title="Search">
                            <i className="bi bi-search" />
                        </button>
                    </form>
                </div>

                {/* Profile & Icons */}
                <div className="d-flex align-items-center">
                    {/* Notification */}
                    <div className="me-3 d-none d-md-block position-relative">
                        <i className="bi bi-bell fs-5"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            4
                        </span>
                    </div>

                    {/* Messages */}
                    <div className="me-3 d-none d-md-block position-relative">
                        <i className="bi bi-chat-left-text fs-5"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                            3
                        </span>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center text-decoration-none dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="assets/img/profile-img.jpg"
                                alt="Profile"
                                className="rounded-circle"
                                width="32"
                                height="32"
                            />
                            <span className="d-none d-md-inline ps-2">Developer</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li className="dropdown-header text-center">
                                <h6 className="mb-0">Test Dev</h6>
                                <small>Web Designer</small>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i> My Profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i> Account Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="bi bi-question-circle me-2"></i> Help</a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i> Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
