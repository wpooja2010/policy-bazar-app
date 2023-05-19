import React from 'react';
import logo from '../Images/logo.svg';
import switchIcon from '../Images/switch.svg'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                <i class="fa-solid fa-mobile"></i> <span className='ms-2'>Switch Journey</span>
                                </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <i className="fa-solid fa-phone"></i> <span className='ms-2'>1234567895</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav