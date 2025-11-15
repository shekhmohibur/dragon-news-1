import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                {/* left aside */}
                <aside></aside>
                <div className="main">
                    <Outlet></Outlet>
                </div>
                {/* right aside */}
                <aside></aside>
            </main>
        </div>
    );
};

export default HomeLayout;