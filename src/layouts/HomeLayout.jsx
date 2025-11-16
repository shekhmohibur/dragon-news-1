import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Letest from '../components/Latest';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header />
                <section className='latest'>
                    <Letest></Letest>
                </section>
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