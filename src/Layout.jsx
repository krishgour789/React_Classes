import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <h1>Helloooo</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
        </nav>
      </header>

      <main>
        <h1 className='text-green-800'>HELLO THIS SYSTEM BUILD</h1>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}
