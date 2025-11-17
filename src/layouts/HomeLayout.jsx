import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header />
                <section className='latest'>
                    <Latest></Latest>
                </section>
                <nav className='nav'>
                    {/* navbar component */}
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='home-layout grid grid-cols-1 md:grid-cols-12 gap-4'>
                {/* left aside */}
                <aside className='md:col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <div className="main md:col-span-6">
                    <Outlet></Outlet>
                </div>
                {/* right aside */}
                <aside className='md:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;