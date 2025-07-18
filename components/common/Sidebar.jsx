import React from 'react';

function Sidebar({ isSidebarOpen }) {
    return (
        <aside
            id="sidebar"
            className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
        >
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <a className="nav-link collapsed">
                        <i className="bi bi-person" />
                        <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed">
                        <i className="bi bi-card-list" />
                        <span>Register</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed">
                        <i className="bi bi-box-arrow-in-right" />
                        <span>Login</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
