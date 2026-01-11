import React from 'react';
import "../styles/styles.css"

function NavigationBar() {
    return (
        <nav className="navbar navbar-dark p-2" style={{backgroundColor: 'hotpink'}}>
            <div className="container-fluid d-flex justify-content-start">
                <a className="navbar-brand ms-5" style={{fontSize: 25}} href="/">Portfolio</a>
                <ul className="navbar-nav flex-row me-5" style={{ marginLeft: '950px'}}>
                    <li className="nav-item px-4">
                        <a className="nav-link" style={{color:'white', fontSize: 18}} href="/about">About</a>
                    </li>
                    <li className="nav-item px-4 ">
                        <a className="nav-link"  style={{color:'white', fontSize: 18}} href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default NavigationBar;