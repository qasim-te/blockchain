import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <div
                    className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    {/*<a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg"*/}
                    {/*                                                               alt="logo"/></a>*/}
                    <a className="sidebar-brand brand-logo-mini" href="index.html"><img
                        src="assets/images/logo-mini.svg" alt="logo"/></a>
                </div>
                <ul className="nav">
                    <li className="nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt=""/>
                                    <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                                    <span>Gold Member</span>
                                </div>
                            </div>
                            <a href="#" id="profile-dropdown" data-toggle="dropdown"><i
                                className="mdi mdi-dots-vertical"></i></a>
                            <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                                 aria-labelledby="profile-dropdown">
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-onepassword  text-info"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar-today text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link" to="/">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link ui-elements-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false"
                           aria-controls="ui-basic">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
                            <span className="menu-title">Basic UI Elements</span>
                            {/*<i className="menu-arrow"></i>*/}
                            <i className="ui-elements" style={{"margin-left": "auto"}}></i>

                        </a>
                        <div className="collapse ui-elements-a" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/buttons">Buttons</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/dropdowns">Dropdowns</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/typography">Typography</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link" to="/basic_form_elements">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
                            <span className="menu-title">Form Elements</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link" to="/basic_tables">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
                            <span className="menu-title">Tables</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link" to="/charts">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
                            <span className="menu-title">Charts</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link" to="/icons">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
                            <span className="menu-title">Icons</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false"
                           aria-controls="auth">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
                            <span className="menu-title">User Pages</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/blank_page"> Blank
                                    Page </Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/error404"> 404 </Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link"
                                                            to="error500"> 500 </Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/login"> Login </Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link"
                                                            to="/register"> Register </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;