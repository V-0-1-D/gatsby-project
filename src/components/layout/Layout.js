import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from '../navbar/Navbar';
import { container } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <Navbar />
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;